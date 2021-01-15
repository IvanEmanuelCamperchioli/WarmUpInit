import React, { useEffect, useState } from 'react';
import image from '../images/backgroundEdit.jpg';
import { Button } from 'reactstrap';
import swal from 'sweetalert';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/edit.css'
import editPost from '../services/put';
import FormEdit from '../components/FormEdit';

const Edit = props => {

    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        const title = props.match.params.title
        const body = props.match.params.body
        const idPost = props.match.params.id
        setId(idPost)
        setTitle(title)
        setBody(body)
    }, [props.match.params.title, props.match.params.body, props.match.params.id]);

    const modify = e => {
        const key = e.target.name
        const value = e.target.value
        setDisabled(false)
        if (key === 'title') {
            setTitle(value)
        } else setBody(value)
    }

    const notify = () => {
        setDisabled(true)
        swal("Accion completada", "Post modificado correctamente", "success");
        props.history.push(`/details/${id}/${title}/${body}`)
    }

    const err = () => {
        swal("Ocurrió un error", "no se pudo concretar la modificación", "error");
        props.history.push(`/details/${id}/${title}/${body}`)
    } 

    const sendModification = async (id, title, body) => {
        await editPost(id, title, body)
        .then(res => {
            if(res.status === 200) {
                notify()
            }
        })
        .catch(() => {
            err()
        })
    }

    const cancel = () => {
        props.history.push(`/details/${id}/${title}/${body}`)
    }

    const flag = () => {
        swal("El post", "se ha modificado", "success");
        props.history.push("/")
    }

    console.log(id)

    return (
        <div className="div-main-edit" style={{ backgroundImage: `url(${image})` }}>
            <div className="div-formEdit">
                <FormEdit 
                    id={id} 
                    title={title} 
                    body={body}
                    modify={modify}
                />
                <div className="div-buttons">
                    {
                        id !== undefined
                            ?
                            <Button
                            className="edit-button"
                            color="primary"
                            disabled={disabled}
                            onClick={() => sendModification(id, title, body)}
                            >
                                Editar
                            </Button>
                            :
                            <Button
                            className="edit-button"
                            color="primary"
                            disabled={disabled}
                            onClick={() => flag()}
                            >
                                Editar
                            </Button>
                    }
                    <Button
                        className="cancel-button"
                        color="secondary"
                        onClick={cancel}
                    >
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>

    );
}

export default Edit;