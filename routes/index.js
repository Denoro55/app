var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save();

/* GET home page. */
router.get('/', function(req, res, next) {
	Cat.find(function(err,cats){
		res.render('index', { 
			title: 'Express' ,
			cats: cats
		});
	})
});

module.exports = router;
