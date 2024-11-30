import React from 'react';

const StudentMenu = () => {
    return (
        <div>
            <h2>Menú Estudiantes</h2>
            <ul>
                <li><a href="/view-courses">Ver Materias Inscritas</a></li>
                <li><a href="/enroll-courses">Agregar/Dar de Baja Materias</a></li>
            </ul>
        </div>
    );
};

export default StudentMenu;

