import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAxiosWithAuth = () => {
    const navigate = useNavigate();

    const instance = axios.create({
        baseURL: 'http://localhost:3000', // Cambia a tu URL base si es necesario
    });

    // Interceptor de solicitudes para agregar token
    instance.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`; // Añadir el token al header
            }
            return config;
        },
        error => Promise.reject(error)
    );

    // Interceptor de respuestas para manejar errores 401
    instance.interceptors.response.use(
        response => response, // Respuestas exitosas pasan sin problema
        async error => {
            if (error.response?.status === 401 && !error.config._retry) {
                error.config._retry = true; // Evita loops infinitos
                try {
                    const refreshToken = localStorage.getItem('refreshToken'); // Obtener el refresh token
                    const response = await axios.post('/refresh-token', { token: refreshToken }); // Endpoint de renovación
                    localStorage.setItem('token', response.data.token); // Actualiza el token
                    error.config.headers['Authorization'] = `Bearer ${response.data.token}`; // Añade el nuevo token
                    return instance(error.config); // Reintenta solicitud original
                } catch (refreshError) {
                    console.error('Error al refrescar el token:', refreshError);
                    localStorage.removeItem('token');
                    localStorage.removeItem('refreshToken');
                    navigate('/login'); // Redirige al login si falla la renovación
                }
            }
            return Promise.reject(error); // Rechaza cualquier otro error
        }
    );

    return instance;
};

export default useAxiosWithAuth;
