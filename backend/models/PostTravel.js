const mongoose = require("mongoose");

const PostTravelSchema = new mongoose.Schema({
    content: String,
    location:String,
    date:Date,
    cost:Number,
    author: {type: mongoose.Types.ObjectId, ref: 'User'}
});

const PostTravel = mongoose.model('Post', PostTravelSchema,'location');

module.exports = {PostTravel};