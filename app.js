
'use strict';
// List of the imported packages for this script
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// MongoDB requireemnts for storage locally
var mongojs = require('mongojs');
var db = mongojs('customerapp', ['users']);

// // Firebase requirements for storage
// const admin = require('firebase-admin');
// const functions = require('firebase-functions');

// admin.initializeApp(functions.config().firebase);
// var db = admin.firestore();

// Start express app
var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
	db.users.find(function (err, docs)  {
		console.log(docs);

		// Render the index.ejs file
		res.render('index', {
			title: 'Customers',
			users: docs
		});
	})

});


// Define people variable
var people = [
	{
		name:'Person A',
		age: 30
	},
	{
		name:'Person B',
		age: 22
	}
]

// app.get('/receive', function(req,res){
// 	// res.json(people);		// This just displays in json the json text you displayed above
// 	// req.body;

// 	// Option 2: Just use res.send to send a simple text
// 	res.send('Hello');  		// This just displays hello.

// 	// // Option 3: Render from a javascript file
// 	// console.log("test run")
// 	// res.render('index');
// });

app.post('/update', function(req,res){
	// The following lets me create a post via the submit button, but I can also use 
	// postman to post into the database, as long as I have the first, last name, and 
	// email.
	// Example:
	/*
		{
			"first_name": "abc",
			"last_name": "def",
			"email": "something@somewhere.com"
		}
	*/

	// This section is version for MongoDB
	var newUser = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	}
	db.users.insert(newUser, function(err, result){
		if(err){
			console.log(err);
		}
		res.redirect('/');
	});
	// var keyName1=req.body.item;
	// console.log(keyName1);
	// res.render(keyName1);
	// res.send("nothing");

	// // This section is the version for Firestore

})



app.listen(3000, function(){
	console.log('Server started on Port 3000...');
})

// // Another way to listen
// var server = app.listen(process.env.PORT || '8080', function(){
// 	console.log('App listening on port %s', server.address().port);
// 	console.log('Press Ctrl+C to quit')
// });