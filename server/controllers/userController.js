const User = require('../models/User');
const StudentProfile = require('../models/StudentProfile');
const UserSettings = require('../models/UserSettings');
const bcrypt = require('bcryptjs');

// @desc    Get user profile with settings and student details
// @route   GET /api/user/profile
// @access  Private
exports.getProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const settings = await UserSettings.findOne({ user: req.user.id });
        const studentProfile = await StudentProfile.findOne({ user: req.user.id });

        res.status(200).json({
            success: true,
            data: {
                user,
                settings,
                studentProfile
            }
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Update user profile data
// @route   PUT /api/user/profile/update
// @access  Private
exports.updateProfile = async (req, res, next) => {
    try {
        const {
            name, mobileNumber, dateOfBirth, gender, location, bio, avatar,
            educationLevel, institutionName, fieldOfStudy, targetExam, careerGoal, weeklyStudyHours
        } = req.body;

        const updateData = { name, mobileNumber, dateOfBirth, gender, location, bio };
        if (avatar !== undefined) updateData.profilePicture = avatar;

        // Update base user details
        const user = await User.findByIdAndUpdate(
            req.user.id,
            updateData,
            { new: true, runValidators: true }
        );

        // Update student academic details
        let studentProfile = await StudentProfile.findOne({ user: req.user.id });
        if (studentProfile) {
            studentProfile = await StudentProfile.findOneAndUpdate(
                { user: req.user.id },
                { educationLevel, institutionName, fieldOfStudy, targetExam, careerGoal, weeklyStudyHours },
                { new: true, runValidators: true }
            );
        }

        res.status(200).json({
            success: true,
            data: { user, studentProfile }
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Update password securely
// @route   PUT /api/user/security/update-password
// @access  Private
exports.updatePassword = async (req, res, next) => {
    try {
        const { currentPassword, newPassword } = req.body;

        const user = await User.findById(req.user.id).select('+password');

        if (!(await user.matchPassword(currentPassword))) {
            return res.status(401).json({ success: false, error: 'Password incorrect' });
        }

        user.password = newPassword;
        await user.save();

        res.status(200).json({ success: true, message: 'Password updated successfully' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

// @desc    Update futuristic AI and app settings
// @route   PUT /api/user/settings/update
// @access  Private
exports.updateSettings = async (req, res, next) => {
    try {
        let settings = await UserSettings.findOne({ user: req.user.id });

        if (!settings) {
            settings = await UserSettings.create({
                user: req.user.id,
                ...req.body
            });
        } else {
            // we use set to update nested elements easily without destroying unpassed keys
            settings.set(req.body);
            await settings.save();
        }

        res.status(200).json({
            success: true,
            data: settings
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
