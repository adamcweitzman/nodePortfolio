var express = require('express');
var router = express.Router();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Likes = require('../model/likes');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/likes', function(req, res, next) {
	Likes.find({}, function(err, likes){
		var likes = likes
		res.json(likes)
	});
});

module.exports = router;
