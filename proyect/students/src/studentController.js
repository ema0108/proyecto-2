const courses = [
    { id: 1, name: 'Math', students: [] },
    { id: 2, name: 'Science', students: [] },
];

exports.getCourses = (req, res) => {
    res.json(courses);
};

exports.enrollInCourse = (req, res) => {
    const { courseId, student } = req.body;
    const course = courses.find((c) => c.id === courseId);
    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }
    course.students.push(student);
    res.json({ message: 'Enrolled successfully' });
};

