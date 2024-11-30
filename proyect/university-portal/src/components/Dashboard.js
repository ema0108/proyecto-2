import React, { useState, useEffect } from 'react';
import StudentMenu from './StudentMenu';
import ProfessorMenu from './ProfessorMenu';

const Dashboard = ({ token }) => {
    const [role, setRole] = useState('');

    useEffect(() => {
        // Simular obtención del rol desde el token
        const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decodificar payload del JWT
        setRole(decodedToken.role); // role será 'student' o 'professor'
    }, [token]);

    if (!role) return <p>Cargando...</p>;

    return (
        <div>
            <h1>Bienvenido al Portal</h1>
            {role === 'student' && <StudentMenu />}
            {role === 'professor' && <ProfessorMenu />}
        </div>
    );
};

export default Dashboard;

