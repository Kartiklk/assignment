const express = require('express');
const usercontroller = require('./../controllers/usercontroller');

const router = express.Router();

router.post('/signup', usercontroller.signup);
router.post('/signin', usercontroller.login);

router.use(usercontroller.protect);

router.get('/getme', usercontroller.getMe, usercontroller.getOne);

module.exports = router;