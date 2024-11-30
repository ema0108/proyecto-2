import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
    const [token, setToken] = useState('');

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard token={token} />} />
                <Route path="/view-courses" element={<h2>Materias Inscritas</h2>} />
                <Route path="/enroll-courses" element={<h2>Agregar/Dar de Baja Materias</h2>} />
                <Route path="/manage-grades" element={<h2>Gestionar Notas</h2>} />
                <Route path="/manage-attendance" element={<h2>Tomar Asistencia</h2>} />
            </Routes>
        </Router>
    );
}

export default App;
