import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Main/Home/Home';
import ListaMonturas from './components/Main/ListaMonturas/ListaMonturas';
import Login from './components/Main/Login/Login';
import Favoritos from './components/Main/Favoritos/Favoritos'; 
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import backgroundImage from './assets/images/cuadricula2.png'; 

const App = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
                backgroundPosition: 'top left',
                minHeight: '100vh',
            }}
        >
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/"
                        element={
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
        </div>
    );
};

export default App;
