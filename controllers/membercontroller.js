const Member = require('./../models/members');
const catchAsync = require('./../utils/catchAsync');


exports.createMember =
  catchAsync(async (req, res, next) => {
   const member = await Member.create(req.body);
   
    res.status(201).json({
      status: 'success',
      data: {
        data: member
      }
    });
  });

  exports.getallMember = catchAsync(async (req, res, next)=>{
    const member = await Member.find();

    res.status(200).json({
      status:'success',
      data: member
    })
  });

  exports.deleteOne = Member
  catchAsync(async (req, res, next) => {
    const doc = await Member.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });