const express = require('express');
const {
    getCourses,
    getCourse,
    enrollCourse,
    updateProgress,
    getMyCourses
} = require('../controllers/courseController');

const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

router.get('/', getCourses);
router.get('/my-courses', protect, getMyCourses);
router.get('/:id', getCourse);
router.post('/enroll/:id', protect, enrollCourse);
router.put('/progress/:id', protect, updateProgress);

module.exports = router;
