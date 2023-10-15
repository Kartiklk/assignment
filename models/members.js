const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    community:{
        type:mongoose.Schema.ObjectId,
        ref:"Community"
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    role:{
        type:mongoose.Schema.ObjectId,
        ref:"Role"
    },
    create_at:{
        type: Date,
        default: Date.now()
    }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;