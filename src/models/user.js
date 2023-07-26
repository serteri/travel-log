const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    locations: [{
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

// refrences Location model via _id field.
// in 'Username' schema, 'username' is required and unique, 'locations is array of obectIDs from location model. i.e. user can have many locations associated.