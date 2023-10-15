const Community = require('./../models/community');
const catchAsync = require('./../utils/catchAsync');

exports.createCommu =
  catchAsync(async (req, res, next) => {
   const commu = await Community.create(req.body);
   
    console.log(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        data: commu
      }
    });
  });

  exports.getallCommu = catchAsync(async (req, res, next)=>{
    const commu = await Community.find();

    res.status(200).json({
      status:'success',
      data: commu
    })
  });

  exports.getoneCommu = catchAsync(async (req, res, next) => {

    console.log(req.params.id, req.user.id)
    const commu = await Community.find({owner: req.params.id})
    

    res.status(200).json({
      status:'success',
      data:commu
    })
  })