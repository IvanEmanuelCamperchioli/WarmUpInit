import React from 'react';
import { FormGroup, Label, Input, Form } from 'reactstrap';

const FormItems = props => {

    const getEvent = e => {
        const name = e.target.name
        const value = e.target.value
        props.getData(name, value)
    }

    return (
        <Form>
            <FormGroup>
            <Label for="title" className="label-form">Título</Label>
                <Input
                    type="text"
                    name="title"
                    autoComplete="off"
                    onChange={getEvent}
                />
            </FormGroup>
            <FormGroup>
                <Label for="content" className="label-form">Contenido</Label>
                <Input
                    type="text"
                    name="content"
                    autoComplete="off"
                    onChange={getEvent}
                />
            </FormGroup>
        </Form>
    );
}

export default FormItems;