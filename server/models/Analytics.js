const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    accuracy: {
        type: Number,
        default: 0
    },
    timeSpent: {
        type: Number, // In minutes
        default: 0
    },
    weakTopics: [String],
    predictedScore: {
        type: Number,
        default: 0
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Analytics', analyticsSchema);
