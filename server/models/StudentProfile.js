const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    goals: [String],
    interests: [String],
    educationLevel: { type: String, default: '' },
    institutionName: { type: String, default: '' },
    fieldOfStudy: { type: String, default: '' },
    targetExam: { type: String, default: '' },
    careerGoal: { type: String, default: '' },
    weeklyStudyHours: { type: Number, default: 10 },
    learningStyle: {
        type: String,
        enum: ['visual', 'auditory', 'reading', 'kinesthetic', 'logical', 'storytelling', 'practical'],
        default: 'visual',
    },
    preferredLanguage: {
        type: String,
        default: 'English',
    },
    aiPersonality: {
        type: String,
        default: 'Friendly',
    },
    studyPlan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StudyPlan',
    },
    progress: {
        totalStudyTime: { type: Number, default: 0 },
        completedTasks: { type: Number, default: 0 },
        skillGraph: {
            type: Map,
            of: Number,
        },
    },
    performanceData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Analytics'
    }
});

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
