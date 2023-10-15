const express = require('express');
const commucontroller = require('./../controllers/commucontroller');
const usercontroller = require('./../controllers/usercontroller');


const router = express.Router();

router.post('/', commucontroller.createCommu);
router.get('/', commucontroller.createCommu);

router.use(usercontroller.protect);

router.get('/me/owner',usercontroller.getMe, commucontroller.getoneCommu);

module.exports = router;