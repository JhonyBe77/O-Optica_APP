import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/montura';

export const getAllMonturas = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data.monturas;
    } catch (error) {
        console.error('Error al obtener todas las monturas:', error);
        throw error;
    }
};

export const getMonturasByCategoria = async (categoria) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categoria/${categoria}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener monturas de la categoría ${categoria}:`, error);
        throw error;
    }
};

