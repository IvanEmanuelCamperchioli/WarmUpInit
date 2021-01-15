import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { NavLink } from "react-router-dom";
import '../styles/details.css';

const List = props => {
   
    return ( 

        props.posts.map( post => {

            return (
                <div>
                    <ListGroupItem className="ListContainer">
                        <p>{post.title}</p> 
                        <div>
                            <NavLink to={`/details/${post.id}/${post.title}/${post.body}`} ><Button>Detalles</Button></NavLink>
                            <NavLink to={`/remove/${post.id}`} ><Button>Eliminar</Button></NavLink>
                        </div>
                    </ListGroupItem>
                </div>
            )
        })
    );
}

export default List;