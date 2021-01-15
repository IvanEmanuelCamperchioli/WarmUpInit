import React, { useEffect, useState } from 'react';
import { Form } from 'reactstrap';
import '../styles/edit.css';
import getPosts from '../services/get';
import FormEditSinceHeader from './FormEditSinceHeader';
import FormEditSinceDetails from './FormEditSinceDetails';

const FormEdit = props => {

    const[posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            if(props.id === undefined) {
                const res = await getPosts()
                setPosts(res.data)
            }
        };
        fetchData();
    });

    return (
            <Form className="formEdit">
                {
                    props.id === undefined
                        ?
                        <FormEditSinceHeader 
                            modify={props.modify} 
                            posts={posts} 
                        />
                        :
                        <FormEditSinceDetails 
                            title={props.title}
                            body={props.body}
                            modify={props.modify}
                        />
                        
                }
                
            </Form>
    );
};

export default FormEdit;