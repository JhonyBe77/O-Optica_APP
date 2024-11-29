import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Verificar si hay token

    if (!token) {
        return <Navigate to="/" />; // Si no está autenticado, redirigir a Login
    }

    return children; // Mostrar contenido si está autenticado
};

export default ProtectedRoute;
