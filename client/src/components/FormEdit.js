import React from 'react';
import {
    FormGroup, Label, Input, Form
} from 'reactstrap';


const FormEdit = props => {

    return (
        <Form>
            {
                props.id === undefined
                    ?
                    <FormGroup>
                        <Label for="type" className="label-form">Tipo</Label>
                        <Input
                            type="select"
                            name="type"
                            onChange={props.modify}
                        >
                            <option value="">título</option>
                            <option name="Ingreso">Ingreso</option>
                        </Input>
                    </FormGroup>
                    :
                    <FormGroup>
                        <Label for="title" className="label-form">Título</Label>
                        <Input
                            type="text"
                            name="title"
                            autoComplete="off"
                            defaultValue={props.title}
                            onChange={props.modify}
                        />
                    </FormGroup>
            }
            <FormGroup>
                <Label for="body" className="label-form">Contenido</Label>
                <Input
                    type="text"
                    name="body"
                    autoComplete="off"
                    defaultValue={props.body}
                    onChange={props.modify}
                />
            </FormGroup>
        </Form>
    );
}

export default FormEdit;