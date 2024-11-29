import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../ListaMonturas/Card/Card'; // Reutilizamos el componente Card

const Favoritos = () => {
    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavoritos = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token'); // Recuperar el token del usuario
                const response = await axios.get('http://localhost:3000/favoritos', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setFavoritos(response.data);
            } catch (error) {
                console.error('Error al cargar favoritos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFavoritos();
    }, []);

    if (loading) return <p>Cargando favoritos...</p>;

    return (
        <div className="favoritos">
            <h1>Mis Favoritos</h1>
            <div className="lista-monturas">
                {favoritos.length > 0 ? (
                    favoritos.map((montura) => <Card key={montura.id} data={montura} />)
                ) : (
                    <p>No tienes favoritos guardados.</p>
                )}
            </div>
        </div>
    );
};

export default Favoritos;
