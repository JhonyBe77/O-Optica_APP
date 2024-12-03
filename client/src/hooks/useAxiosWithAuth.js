import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAxiosWithAuth = () => {
    const navigate = useNavigate();

    const instance = axios.create({
        baseURL: 'http://localhost:3000', 
    });

    
    instance.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`; 
            }
            return config;
        },
        error => Promise.reject(error)
    );

    
    instance.interceptors.response.use(
        response => response, 
        async error => {
            if (error.response?.status === 401 && !error.config._retry) {
                error.config._retry = true; 
                try {
                    const refreshToken = localStorage.getItem('refreshToken'); 
                    const response = await axios.post('/refresh-token', { token: refreshToken }); 
                    localStorage.setItem('token', response.data.token); 
                    error.config.headers['Authorization'] = `Bearer ${response.data.token}`; 
                    return instance(error.config); 
                } catch (refreshError) {
                    console.error('Error al refrescar el token:', refreshError);
                    localStorage.removeItem('token');
                    localStorage.removeItem('refreshToken');
                    navigate('/login'); 
                }
            }
            return Promise.reject(error); 
        }
    );

    return instance;
};

export default useAxiosWithAuth;
