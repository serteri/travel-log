const mongoose = require("mongoose");

const PostTravelSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {type: mongoose.Types.ObjectId, ref: 'User'}
});

const PostTravel = mongoose.model('Post', PostTravelSchema,'location');

module.exports = {PostTravel};