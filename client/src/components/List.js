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
                        <NavLink to={`/details/${post.id}`} ><Button>Detalles</Button></NavLink>
                    </ListGroupItem>
                </div>
            )
        })
    );
}
 
export default List;