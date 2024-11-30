const classes = require('../models/classes');

// Obtener las clases asignadas al profesor
exports.getClasses = (req, res) => {
    const professorId = req.query.professorId; // Simula un filtro por profesor
    const assignedClasses = classes.filter((cls) => cls.professorId === Number(professorId));
    res.json(assignedClasses);
};

// Actualizar la nota de un estudiante en una clase
exports.updateGrade = (req, res) => {
    const classId = Number(req.params.id);
    const { studentId, grade } = req.body;

    const cls = classes.find((c) => c.id === classId);
    if (!cls) return res.status(404).json({ message: 'Class not found' });

    const student = cls.students.find((s) => s.id === studentId);
    if (!student) return res.status(404).json({ message: 'Student not found in this class' });

    student.grade = grade;
    res.json({ message: 'Grade updated successfully', class: cls });
};

// Tomar asistencia de los estudiantes en una clase
exports.takeAttendance = (req, res) => {
    const classId = Number(req.params.id);
    const { attendance } = req.body; // { studentId: true/false }

    const cls = classes.find((c) => c.id === classId);
    if (!cls) return res.status(404).json({ message: 'Class not found' });

    cls.students.forEach((student) => {
        if (attendance[student.id] !== undefined) {
            student.present = attendance[student.id];
        }
    });

    res.json({ message: 'Attendance recorded successfully', class: cls });
};
