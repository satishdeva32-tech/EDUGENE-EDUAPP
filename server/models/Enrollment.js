const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    progress: {
        type: Number,
        default: 0
    },
    completedVideos: [{
        type: Number // Index of the video in the course.videos array
    }],
    lastAccessed: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['enrolled', 'completed'],
        default: 'enrolled'
    },
    enrolledAt: {
        type: Date,
        default: Date.now
    }
});

// Prevent duplicate enrollments for the same user and course
enrollmentSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
