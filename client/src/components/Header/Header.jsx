import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
    const { logout } = useContext(AuthContext);

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
                            onClick={logout}
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
