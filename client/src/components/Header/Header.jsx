import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/login'); 
    };

    return (
        <header style={{ padding: '1rem', }}>
            <nav>
                <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}

                        >
                            Cerrar Sesión
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
