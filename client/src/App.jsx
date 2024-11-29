import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Login from './components/Main/Login'; 

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} /> {/* Login como página principal */}
            </Routes>
        </Router>
    );
};

export default App;
