const express = require('express');
const { getClasses, updateGrade, takeAttendance } = require('./controllers/professorController');
const router = express.Router();

// Rutas para profesores
router.get('/classes', getClasses); // Obtener todas las clases asignadas
router.post('/classes/:id/grades', updateGrade); // Actualizar notas de los estudiantes
router.post('/classes/:id/attendance', takeAttendance); // Tomar asistencia

module.exports = router;

