import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Main/Home/Home';
import ListaMonturas from './components/Main/ListaMonturas/ListaMonturas';
import Login from './components/Main/Login/Login';
import Favoritos from './components/Main/Favoritos/Favoritos'; // Importamos Favoritos
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/" element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/categoria/:categoria"
                    element={
                        <ProtectedRoute>
                            <ListaMonturas />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/favoritos"
                    element={
                        <ProtectedRoute>
                            <Favoritos />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
