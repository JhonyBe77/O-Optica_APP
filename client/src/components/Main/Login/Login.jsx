import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logoQ from '../../../assets/images/LOGO-Q.png';
//prueba de imagen para banner de categoría
// import backgroundImage from '../../../assets/images/bannerH.png';
import backgroundPattern from '../../../assets/images/cuadricula2.png';
import { ClockLoader } from 'react-spinners';

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

            localStorage.setItem('token', token);
            navigate('/');
        } catch (err) {
            setError('Credenciales incorrectas. Inténtalo de nuevo.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div
            // primer spinner
            /* className="login"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }} */

                className="login"
                style={{
                    backgroundImage: `url(${backgroundPattern})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                    backgroundPosition: 'top left', 
                    height: '100vh',
                }}
        >
            <div>
                <img src={logoQ} alt="Logo O-Q" className="login-logo" />
            </div>
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
                {/* <button type="submit" disabled={loading}>
                    {loading ? 'Iniciando...' : 'Iniciar Sesión'}
                </button> */}
                {loading ? (
                    <ClockLoader color="#fd39a2" size={77} /> // spinner reloj
                ) : (
                    <button type="submit">Iniciar Sesión</button> 
                )}
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Login;
