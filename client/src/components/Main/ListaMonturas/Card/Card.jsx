import React, { useState } from 'react';
import axios from 'axios';

const Card = ({ data }) => {
    const { id, name, price, img, color, description_summary } = data;
    const [isFavorite, setIsFavorite] = useState(false); 

    const handleFavorite = async () => {
        const token = localStorage.getItem('token'); 
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
            setIsFavorite(!isFavorite); 
        } catch (error) {
            console.error('Error al actualizar favoritos:', error);
        }
    };

    return (
        <div className="card">
            <img src={img} alt={name} className="card-img" />
            <h3>{name}</h3>
            <p>Precio: {price}€</p>
            <p>{color}</p>
            <p>{description_summary}</p> 
            <button onClick={handleFavorite} className={isFavorite ? 'favorite active' : 'favorite'}>
                {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
        </div>
    );
};

export default Card;
