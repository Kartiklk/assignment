const express = require('express');
const membercontroller = require('./../controllers/membercontroller');
const usercontroller = require('./../controllers/usercontroller');

const router = express.Router();

router.post('/', membercontroller.createMember);
router.get('/', membercontroller.getallMember);

router.route('/:id')
.delete(
    usercontroller.protect,
    usercontroller.restrictTo('admin',),
    membercontroller.deleteOne
  );

module.exports = router;