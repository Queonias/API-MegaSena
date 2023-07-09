const express = require('express');
const user = require('../controllers/user.controller');
const { validFields } = require('../middleware/validFields');

const router = express.Router();

router.post('/signup', validFields, user.signupService);
router.post('/login', validFields,  user.loginService);
router.post('/logout', validFields,  user.logoutService);
router.post('/me', user.me);


module.exports = router;