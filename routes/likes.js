var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var config = require('../config');
var jwt = require('jsonwebtoken');
var User = require('../models/user'); // get our mongoose model
var Venue = require('../models/venue');
var Token = require('../models/token');
var mongoose = require('mongoose');



router.get('/likes', function(req, res, next) {
	Likes.find({}, function(err, users){
		res.json(users);
	});
});