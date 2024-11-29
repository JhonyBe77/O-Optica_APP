import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Eliminar el token
        navigate('/login'); // Redirigir al login
    };

    return (
        <header style={{ padding: '1rem', background: '#f0f0f0' }}>
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
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'blue',
                                cursor: 'pointer',
                                textDecoration: 'underline',
                            }}
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
