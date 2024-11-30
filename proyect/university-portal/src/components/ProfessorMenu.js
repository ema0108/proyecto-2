import React from 'react';

const ProfessorMenu = () => {
    return (
        <div>
            <h2>Menú Profesores</h2>
            <ul>
                <li><a href="/manage-grades">Gestionar Notas</a></li>
                <li><a href="/manage-attendance">Tomar Asistencia</a></li>
            </ul>
        </div>
    );
};

export default ProfessorMenu;
