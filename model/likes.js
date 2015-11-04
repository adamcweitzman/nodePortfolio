var mongoose = require('mongoose');

var likesSchema = new mongoose.Schema({
	likes: Number,
	tag: String
});

module.exports = mongoose.model('Likes', likesSchema);