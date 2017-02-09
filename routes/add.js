var data = require("../data.json");


exports.addFriend = function(req, res) {    
	// Your code goes here
	var friend = {name: req.query.name, description: req.query.description, imageURL: "http://lorempixel.com/400/400/people"};
	console.log();
	res.render('index.handlebars', data);

	data.friends.push(friend);

 }