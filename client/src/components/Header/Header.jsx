import React from 'react';
import Nav from './Nav'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Óptica App</h1>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
