const express = require('express');
const {
    getProfile,
    updateProfile,
    updatePassword,
    updateSettings
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect); // All user routes require authentication

router.route('/profile')
    .get(getProfile);

router.route('/profile/update')
    .put(updateProfile);

router.route('/security/update-password')
    .put(updatePassword);

router.route('/settings/update')
    .put(updateSettings);

// TODO: /avatar endpoints when file upload is set up

module.exports = router;
