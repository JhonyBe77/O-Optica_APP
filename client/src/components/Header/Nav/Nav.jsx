import React from 'react';
import { Link } from 'react-router-dom'; 

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/login">Iniciar Sesión</Link>
                </li>
                <li>
                    <Link to="/favoritos">Favoritos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
