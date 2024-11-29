import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || 'Error al iniciar sesión';
    }
};
