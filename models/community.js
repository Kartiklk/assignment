const mongoose = require('mongoose');
const slugify = require('slugify');

const communitySchema = new mongoose.Schema({
    name:{
        type: String
    },
    slug: String,
    owner:{
        type: mongoose.Schema.ObjectId,
        ref:'User'
    },
    created_at:{
        type: Date,
        default: Date.now()
     } 
});

communitySchema.index({ slug: 1 });

communitySchema.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
  });


const Community = mongoose.model('Community', communitySchema);

module.exports = Community;