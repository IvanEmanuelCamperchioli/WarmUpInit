import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { NavLink } from "react-router-dom";
import '../styles/details.css';

const List = props => {

    return (

        props.posts.map(post => {
            return (
                <ListGroupItem className="ListContainer">
                    <p>{post.title}</p>
                    <div className="buttons">
                        <NavLink to={`/details/${post.id}/${post.title}/${post.body}`} ><Button>Detalles</Button></NavLink>
                        <NavLink to={`/remove/${post.id}/${post.title}`} ><Button>Eliminar</Button></NavLink>
                    </div>
                </ListGroupItem>
            )
        })
    );
};

export default List;