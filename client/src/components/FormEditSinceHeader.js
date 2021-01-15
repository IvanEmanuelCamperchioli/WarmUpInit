import React from 'react';
import {
    FormGroup, Label, Input
} from 'reactstrap';

const FormEditSinceHeader = props => {

    return (
        <>
            <FormGroup>
                <Label for="type" className="label-form">Elegir por título</Label>
                <Input
                    type="select"
                    name="title"
                    onChange={props.modify}
                >
                    <option value="">título</option>
                    {props.posts.map(post => {
                        return (
                            <option value={post.title}>{post.title}</option>
                        )
                    })}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="body" className="label-body">Contenido</Label>
                <Input
                    type="textarea"
                    name="body"
                    autoComplete="off"
                    onChange={props.modify}
                />
            </FormGroup>
        </>
    );
}

export default FormEditSinceHeader;