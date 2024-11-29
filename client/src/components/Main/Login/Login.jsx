import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { login } from '../../../api/authService'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Limpiar errores

        try {
            const data = await login(email, password); // Llamada al backend
            localStorage.setItem('token', data.token); 
            navigate('/home'); 
        } catch (err) {
            setError(err); 
        }
    };

    return (
        <div className="login-page">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit} className="login-form">
                {error && <p className="error">{error}</p>} 
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
