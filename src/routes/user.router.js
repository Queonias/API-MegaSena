const express = require('express');
const user = require('../controllers/user.controller');
const { validateToken, validateUserField } = require('../middleware');

const router = express.Router();

router.post('/signup', validateUserField, user.signupService);
router.post('/login', validateUserField,  user.loginService);
router.post('/logout', validateToken,  user.logoutService);
router.post('/me', validateToken, user.me);


module.exports = router;