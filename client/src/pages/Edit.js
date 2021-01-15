import React, { useEffect, useState } from 'react';
import image from '../images/backgroundEdit.jpg'
import {
    Button, FormGroup, Label, Input, Form
} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/edit.css'

const Edit = props => {

    const[id, setId] = useState('')
    const[modal, setModal] = useState(false)
    // const[post, setPost] = useState({
    //     title: '',
    //     content: ''
    // })


    useEffect(() => {
        const idPost = props.match.params.id
        setId(idPost)
    }, [props.match.params.id]);

    const getData = e => {
    //     const name = e.target.name
    //     const value = e.target.value
    //      setPost({
    //          [name]: value
    //      });
    }

    const toggle = () => setModal(!modal)

    return (
        <div className="div-main-edit" style={{ backgroundImage: `url(${image})` }}>
            {
                id === undefined
                    ?
                    <Form>
                        <FormGroup>
                            <Label for="type" className="label-form">Tipo</Label>
                            <Input
                                // disabled={this.state.disabled}
                                type="select"
                                name="type"
                                onChange={getData}
                            >
                                <option value="">título</option>
                                <option name="Ingreso">Ingreso</option>
                                <option name="Egreso">Egreso</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="concept" className="label-form">Concepto</Label>
                            <Input
                                type="text"
                                name="concept"
                                autoComplete="off"
                                onChange={getData}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount" className="label-form">Monto</Label>
                            <Input
                                type="number"
                                name="amount"
                                placeholder="$"
                                onChange={getData}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date" className="label-form">Fecha</Label>
                            <Input
                                type="date"
                                name="date"
                                onChange={getData}
                            />
                        </FormGroup>
                    </Form>
                    :
                    <Form>
                        <FormGroup>
                            <Label for="concept" className="label-form">Concepto</Label>
                            <Input
                                type="text"
                                name="concept"
                                autoComplete="off"
                                onChange={getData}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount" className="label-form">Monto</Label>
                            <Input
                                type="number"
                                name="amount"
                                placeholder="$"
                                onChange={getData}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date" className="label-form">Fecha</Label>
                            <Input
                                type="date"
                                name="date"
                                onChange={getData}
                            />
                        </FormGroup>
                    </Form>
            }
            <Button
                className="button-modal"
                color="primary"
                // disabled={disabled}
            >
                Editar
                            </Button>
            <Button
                className="button-modal"
                color="secondary"
                onClick={toggle}
            >
                Cancelar
                            </Button>
        </div>

    );
}

export default Edit;