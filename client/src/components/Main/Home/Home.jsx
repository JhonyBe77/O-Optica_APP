import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bienvenido a la óptica</h1>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link to="/categoria/Masculino">
                    <button>Masculino</button>
                </Link>
                <Link to="/categoria/Femenino">
                    <button>Femenino</button>
                </Link>
                <Link to="/categoria/Unisex">
                    <button>Unisex</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
