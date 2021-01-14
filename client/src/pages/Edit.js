import React from 'react';
import image from '../images/backgroundEdit.jpg'
import {    
    Button, FormGroup, Label, Input, Form
} from 'reactstrap';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/edit.css'

class Edit extends React.Component {

    state = { 
        id: ''
    }

    componentDidMount() {
        const idPost = this.props.match.params.id
        this.setState({ id: idPost })
    }

    toggle = () => {
        this.setState({ 
            modal: !this.state.modal,
            disabled: false 
        });
    }

    getData = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        }); 
    }

    notify = () => {
        toast.dark(
            <h4 className="toast-text">Datos registrados correctamente</h4>,
            {   
                transition: Zoom,
                position: toast.POSITION.BOTTOM_CENTER,
                hideProgressBar: true,
                delay: 500
            }
        );
    }

    render() { 
        console.log(this.state.id)

        return ( 
            <div className="div-main-edit" style={{ backgroundImage: `url(${image})` }}>
                                {
                                    this.state.id === undefined
                                    ?
                                    <Form>
                                        <FormGroup>
                                            <Label for="type" className="label-form">Tipo</Label>
                                            <Input 
                                                disabled={this.state.disabled}
                                                type="select" 
                                                name="type" 
                                                onChange={this.getData}
                                            >
                                                <option value="">--Selecciona una operación--</option>
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
                                            onChange={this.getData}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amount" className="label-form">Monto</Label>
                                        <Input 
                                            type="number" 
                                            name="amount" 
                                            placeholder="$" 
                                            onChange={this.getData}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="date" className="label-form">Fecha</Label>
                                        <Input 
                                            type="date" 
                                            name="date" 
                                            onChange={this.getData} 
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
                                            onChange={this.getData}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amount" className="label-form">Monto</Label>
                                        <Input 
                                            type="number" 
                                            name="amount" 
                                            placeholder="$" 
                                            onChange={this.getData}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="date" className="label-form">Fecha</Label>
                                        <Input 
                                            type="date" 
                                            name="date" 
                                            onChange={this.getData} 
                                        />
                                    </FormGroup>
                                    </Form>
                                }
                            <Button 
                                className="button-modal"
                                color="primary" 
                                disabled={this.state.disabled} 
                            >
                                Editar
                            </Button>
                            <Button 
                                className="button-modal"
                                color="secondary" 
                                onClick={this.toggle}
                            >
                                Cancelar
                            </Button>
            </div>
         );
    }
}
 
export default Edit;