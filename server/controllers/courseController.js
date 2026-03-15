const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({
            success: true,
            count: courses.length,
            data: courses
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Get single course with enrollment status
// @route   GET /api/courses/:id
// @access  Private/Public
exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ success: false, error: 'Course not found' });
        }

        let enrollment = null;
        if (req.user) {
            enrollment = await Enrollment.findOne({ user: req.user.id, course: req.params.id });
        }

        res.status(200).json({
            success: true,
            data: course,
            enrollment
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Enroll in a course
// @route   POST /api/courses/enroll/:id
// @access  Private
exports.enrollCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ success: false, error: 'Course not found' });
        }

        let enrollment = await Enrollment.findOne({ user: req.user.id, course: req.params.id });

        if (enrollment) {
            return res.status(400).json({ success: false, error: 'User already enrolled' });
        }

        enrollment = await Enrollment.create({
            user: req.user.id,
            course: req.params.id
        });

        res.status(201).json({
            success: true,
            data: enrollment
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Update video progress
// @route   PUT /api/courses/progress/:id
// @access  Private
exports.updateProgress = async (req, res) => {
    try {
        const { videoIndex } = req.body;

        const enrollment = await Enrollment.findOne({ user: req.user.id, course: req.params.id });

        if (!enrollment) {
            return res.status(404).json({ success: false, error: 'Enrollment not found' });
        }

        if (!enrollment.completedVideos.includes(videoIndex)) {
            enrollment.completedVideos.push(videoIndex);

            const course = await Course.findById(req.params.id);
            const totalVideos = course.videos.length;
            enrollment.progress = Math.round((enrollment.completedVideos.length / totalVideos) * 100);

            if (enrollment.progress === 100) {
                enrollment.status = 'completed';
            }
        }

        enrollment.lastAccessed = Date.now();
        await enrollment.save();

        res.status(200).json({
            success: true,
            data: enrollment
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Get user enrollments
// @route   GET /api/courses/my-courses
// @access  Private
exports.getMyCourses = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ user: req.user.id }).populate('course');

        res.status(200).json({
            success: true,
            data: enrollments
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};
