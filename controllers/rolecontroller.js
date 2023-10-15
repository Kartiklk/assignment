const Role = require('./../models/role');
const catchAsync = require('./../utils/catchAsync');

exports.createRole =
  catchAsync(async (req, res, next) => {
   const role = await Role.create(req.body);
   
    res.status(201).json({
      status: 'success',
      data: {
        data: role
      }
    });
  });

  exports.getallRole = catchAsync(async (req, res, next)=>{
    const role = await Role.find();

    res.status(200).json({
      status:'success',
      data: role
    })
  });