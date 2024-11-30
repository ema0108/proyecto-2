const express = require('express');
const { getCourses, enrollInCourse } = require('./controllers/studentController');
const router = express.Router();

router.get('/courses', getCourses);
router.post('/enroll', enrollInCourse);

module.exports = router;

