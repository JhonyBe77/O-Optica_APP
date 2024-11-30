import React, { useState } from 'react';
import axios from 'axios';

const Card = ({ data }) => {
    const { id, name, price, img, color, description_summary } = data;
    const [isFavorite, setIsFavorite] = useState(false); // Estado para favoritos

    const handleFavorite = async () => {
        const token = localStorage.getItem('token'); // Recuperar el token del usuario
        try {
            if (isFavorite) {
                await axios.delete(`http://localhost:3000/favoritos/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
            } else {
                await axios.post(
                    'http://localhost:3000/favoritos',
                    { monturaId: id },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            }
            setIsFavorite(!isFavorite); // Actualizar el estado
        } catch (error) {
            console.error('Error al actualizar favoritos:', error);
        }
    };

    return (
        <div className="card">
            <img src={img} alt={name} className="card-img" />
            <h3>{name}</h3>
            <p className="price">Precio: {price} €</p>
            <p> {color}</p>
            <p> {description_summary}</p>
            <button onClick={handleFavorite} className={isFavorite ? 'favorite active' : 'favorite'}>
                {isFavorite ? 'Quitar' : 'Favoritos'}
            </button>
        </div>
    );
};

export default Card;
