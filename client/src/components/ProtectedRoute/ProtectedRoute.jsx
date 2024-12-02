import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente que protege las rutas de la app.
// Solo deja acceder si el usuario tiene un token válido.
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Para ver si el token está guardado en localStorage.

    if (!token) {
        return <Navigate to="/" />; // Si no hay token, mando al usuario a la página de inicio.
    }

    return children; // Si el token existe, muestro el contenido que está dentro de esta ruta.
};

export default ProtectedRoute;
