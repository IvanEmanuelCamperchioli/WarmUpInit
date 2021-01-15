import React from 'react';
import {
    FormGroup, Label, Input
} from 'reactstrap';
import '../styles/edit.css';


const FormEditSinceDetails = props => {
    return (
        <>
            <FormGroup>
                <Label for="title" className="label-title">Título</Label>
                <Input
                    type="text"
                    name="title"
                    autoComplete="off"
                    defaultValue={props.title}
                    onChange={props.modify}
                />
            </FormGroup>
            <FormGroup>
                <Label for="body" className="label-body">Contenido</Label>
                <Input
                    type="textarea"
                    name="body"
                    autoComplete="off"
                    defaultValue={props.body}
                    onChange={props.modify}
                />
            </FormGroup>
        </>
    );
};

export default FormEditSinceDetails;