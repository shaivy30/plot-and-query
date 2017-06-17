var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.sendFile(path.join(__dirname,'../','index.html'));
});

router.get('/user/:userId', function(req, res) {
	var username = req.params.userId;
	console.log("********************** " + username);

	var db = req.db;

	var collection = db.get('usercollection');

	console.log("************ collecction");

	collection.find({'user': username}, function(err, cursor){
		res.send(cursor[0]);
	});
	
  //  res.send(output);
});

router.get('/maps', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../','map_page.html'));
});

router.post('/user', function(req,res){
	
	// take username
	var username = req.body.user;

	//take geolocationData in the input box
	var geolocationData = req.body.geolocationData;


	var db = req.db;

	var collection = db.get('usercollection');

	collection.insert({
		'user': username,
		'geolocationData': geolocationData
	}, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });

});

module.exports = router;
