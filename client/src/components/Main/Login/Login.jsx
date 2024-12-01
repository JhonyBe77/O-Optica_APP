import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); 

        try {
            const response = await axios.post('http://localhost:3000/user/login', { email, password });
            const { token } = response.data;

            // Guarda el token en localStorage
            localStorage.setItem('token', token);

            navigate('/');
        } catch (err) {
            setError('Credenciales incorrectas. Inténtalo de nuevo.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="login">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Iniciando...' : 'Iniciar Sesión'}
                </button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Login;
