var express = require('express');
var router = express.Router();

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
