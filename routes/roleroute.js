const express = require('express');
const usercontroller = require('./../controllers/rolecontroller');


const router = express.Router();

router.post('/', usercontroller.createRole);
router.get('/', usercontroller.getallRole);

module.exports = router;