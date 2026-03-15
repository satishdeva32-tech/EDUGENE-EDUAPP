const mongoose = require('mongoose');

const userSettingsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    // 1. AI Assistant Settings
    aiAssistant: {
        tutorEnabled: { type: Boolean, default: true },
        personalityMode: {
            type: String,
            enum: ['Friendly Tutor', 'Strict Coach', 'Motivational Mentor', 'Exam Expert'],
            default: 'Friendly Tutor'
        },
        responseStyle: {
            type: String,
            enum: ['Detailed', 'Simple', 'Visual', 'Exam-Oriented'],
            default: 'Detailed'
        },
        autonomyLevel: {
            type: String,
            enum: ['Manual', 'Semi-Autonomous', 'Fully Autonomous Learning Mode'],
            default: 'Semi-Autonomous'
        }
    },
    // 2. Digital Twin Controls
    digitalTwin: {
        simulationEnabled: { type: Boolean, default: true },
        strategySimulator: { type: Boolean, default: true },
        performancePrediction: { type: Boolean, default: true },
        burnoutSensitivity: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' }
    },
    // 3. Brain-Adaptive Learning
    brainAdaptive: {
        learningStyle: { type: String, enum: ['Visual', 'Logical', 'Storytelling', 'Practical'], default: 'Visual' },
        difficultySpeed: { type: String, enum: ['Slow', 'Normal', 'Fast', 'Adaptive'], default: 'Adaptive' },
        microLessonAutoGen: { type: Boolean, default: true },
        knowledgeGapSensitivity: { type: String, enum: ['Low', 'Medium', 'High'], default: 'High' }
    },
    // 4. Productivity Optimization
    productivity: {
        studyScheduleAutomation: { type: Boolean, default: true },
        focusSessionTimer: { type: Number, default: 25 }, // minutes
        breakReminderFrequency: { type: Number, default: 30 }, // minutes
        sleepOptimization: { type: Boolean, default: true }
    },
    // 5. Emotional Intelligence
    emotionalIntelligence: {
        emotionDetection: { type: Boolean, default: true },
        stressMonitoring: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
        motivationalAlerts: { type: Boolean, default: true },
        encouragementNotifications: { type: Boolean, default: true }
    },
    // 6. Voice Mentor Settings
    voiceMentor: {
        enabled: { type: Boolean, default: false },
        personality: { type: String, enum: ['Professional', 'Casual', 'Energetic'], default: 'Professional' },
        speedControl: { type: Number, default: 1.0 }, // 0.5x to 2.0x
        speechToText: { type: Boolean, default: false }
    },
    // 7. Learning Metaverse
    metaverse: {
        classroom3D: { type: Boolean, default: false },
        gamifiedProgression: { type: Boolean, default: true },
        virtualStudyRoom: { type: Boolean, default: true }
    },
    // 8. Career Navigator
    careerNavigator: {
        recommendationsEnabled: { type: Boolean, default: true },
        skillGapDetection: { type: Boolean, default: true },
        internshipTracking: { type: Boolean, default: true },
        certificationSuggestions: { type: Boolean, default: true }
    },
    // 9. Privacy & Data
    privacy: {
        aiMemoryStorage: { type: Boolean, default: true },
        digitalTwinDataPermissions: { type: Boolean, default: true },
        wearableIntegration: { type: Boolean, default: false }
    },
    // 10. Personalization
    personalization: {
        theme: { type: String, enum: ['Dark', 'Light', 'Auto'], default: 'Auto' },
        interfaceDensity: { type: String, enum: ['Compact', 'Comfortable', 'Spacious'], default: 'Comfortable' },
        language: { type: String, default: 'English' }
    },
    // 🚀 Ultra-Futuristic Settings
    cognitiveMode: {
        type: String,
        enum: ['Learning Mode', 'Deep Focus Mode', 'Exam Preparation Mode', 'Creative Thinking Mode', 'Research Mode'],
        default: 'Learning Mode'
    },
    aiSelfEvolution: {
        enabled: { type: Boolean, default: false }
    }
}, { timestamps: true });

module.exports = mongoose.model('UserSettings', userSettingsSchema);
