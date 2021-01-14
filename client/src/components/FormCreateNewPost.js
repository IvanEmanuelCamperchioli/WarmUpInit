import React from 'react';
import {    
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormItems from './FormItems';


class FormCreateNewPost extends React.Component {

    state = { 
        modal: false,
        title: "",
        content: "",
        disabled: false
    }
    
    toggle = () => {
        this.setState({ 
            modal: !this.state.modal,
            disabled: false 
        });
    }

    getData = (key, eventValue) => {
        const property = key
        const value = eventValue
        this.setState({
            [property] : value
        }); 
    }

    notify = () => {
        toast.dark(
            <h4 className="toast-text">el post <i>{this.state.title}</i> ha sido creado!</h4>,
            {   
                transition: Zoom,
                position: toast.POSITION.BOTTOM_CENTER,
                hideProgressBar: true,
                delay: 500
            }
        );
    }

    createNewPost = async e => {
        e.preventDefault()
        this.setState({ disabled: !this.state.disabled });

        // Easy verify
        const { title, content } = this.state
        if( title === '' || content === '' ) {
            alert("Hay datos incompletos")
            this.setState({ disabled: false })
        } else {
            const newPost = { title, content }

            // Send data through axios request
            await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then( res => {
                console.log(res)
                if(res.status === 201) {
                    this.setState({ modal: !this.state.modal })
                    this.notify()
                    this.setState({
                        title: '', 
                        content: ''
                    });
                    this.props.getPosts()
                }  
            })
            .catch(error => {
                alert('Hubo un problema al intentar crear el post')
                this.setState({
                    title: '', 
                    concept: '', 
                    amount: 0, 
                    date: '',
                    disabled: !this.state.disabled 
                });
                this.toggle()
            });
        };
    }

    render() { 

        return ( 
            <>
                <div style={{ marginLeft: '2rem' }}>
                    <Button 
                        className="buttonForm" 
                        color="danger" 
                        onClick={this.toggle}
                    >   
                        <h6>Crear Nuevo Post</h6>
                    </Button>
                    <Modal 
                        isOpen={this.state.modal} 
                        toggle={this.toggle} 
                        className="modal-form"
                    >
                        <ModalHeader toggle={this.toggle}>Formulario de creación de post</ModalHeader>
                        <ModalBody>
                            <FormItems  getData={this.getData}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button 
                                className="button-modal"
                                color="primary" 
                                disabled={this.state.disabled} 
                                onClick={this.createNewPost}
                            >
                                Crear
                            </Button>
                            <Button 
                                className="button-modal"
                                color="secondary" 
                                onClick={this.toggle}
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
};
 
export default FormCreateNewPost;