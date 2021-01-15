import React, { useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormItems from './FormItems';
import '../styles/home.css';
import toPost from '../services/post';

const FormCreateNewPost = () => {

    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [disabled, setDisabled] = useState(false)

    const toggle = () => {
        setModal(!modal)
        setDisabled(false)
    };

    const getData = (key, eventValue) => {
        const property = key
        const value = eventValue
        if(property === 'title') {
            setTitle(value)
        } else setContent(value)
    };

    const notify = () => {
        toast.dark(
            <h4 className="toast-text">
                el post <i className="i-text" >{title}</i> ha sido creado!
            </h4>,
            {
                transition: Zoom,
                position: toast.POSITION.BOTTOM_CENTER,
                hideProgressBar: true,
                delay: 500
            }
        );
    };

    const createNewPost = async e => {
        e.preventDefault()
        setDisabled(!disabled)

        // Easy verify
        if (title === '' || content === '') {
            alert("Hay datos incompletos")
            setDisabled(false)
        } else {
            const newPost = { 
                title: title, 
                content: content 
            }

            // Send data through axios request
            await toPost(newPost)
                .then(res => {
                    if (res.status === 201) {
                        setModal(!modal)
                        notify()
                        setTitle('')
                        setContent('')
                    }
                })
                .catch(error => {
                    alert('Hubo un problema al intentar crear el post')
                    setTitle('')
                    setContent('')
                    setDisabled(!disabled)
                    toggle()
                });
        };
    };


    return (
        <>
            <div style={{ marginLeft: '2rem' }}>
                <Button
                    className="buttonForm"
                    color="danger"
                    onClick={toggle}
                >
                    <h6 style={{ color: 'black' }}>Crear Nuevo Post</h6>
                </Button>
                <Modal
                    isOpen={modal}
                    toggle={toggle}
                    className="modal-form"
                >
                    <ModalHeader toggle={toggle}>Formulario de creación de post</ModalHeader>
                    <ModalBody>
                        <FormItems getData={getData} />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            className="button-modal"
                            color="primary"
                            disabled={disabled}
                            onClick={createNewPost}
                        >
                            Crear
                            </Button>
                        <Button
                            className="button-modal"
                            color="secondary"
                            onClick={toggle}
                        >
                            Cancelar
                            </Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div>
                <ToastContainer className="toast-container" />
            </div>
        </>
    );
};

export default FormCreateNewPost;
  

    