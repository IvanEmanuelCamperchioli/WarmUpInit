import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {

    return ( 
            <div className="header">
                <h1 className="logo">Inicio | Listado de posts</h1>
                <div className="header-right">
                    <NavLink className="menu" to="/" >Inicio</NavLink>
                    <NavLink className="menu" to="/edit" >Editar Post</NavLink>
                </div>
            </div>
     );
};
 
export default Header;