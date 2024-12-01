import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/components/_Home.scss';

const Home = () => {
    return (  
        <div className="home">
            <header className="home-header">
                <button className="menu-button">☰</button>
                <div className="logo">
                    <h1>O-Q</h1>
                    <p>tu óptica de barrio</p>
                </div>
            </header>
            <main className="home-main">
                <Link to="/categoria/Masculino" className="category-card">
                    Monturas Masculinas
                </Link>
                <Link to="/categoria/Femenino" className="category-card">
                    Monturas Femeninas
                </Link>
                <Link to="/categoria/Unisex" className="category-card">
                    Monturas Unisex
                </Link>
            </main>
        </div>
    );
};

export default Home;
