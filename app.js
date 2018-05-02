
// 'use strict';
// var express = require('express');
// var bodyParser = require('body-parser');

// var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.post('/todos', (req, res) => {
// console.log(req.body);
// });

// app.listen(3000, () => {
// console.log('Server is running on port 3000');
// });

'use strict';
// List of the imported packages for this script
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Start express app
var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
	{
		id:1,
		first_name: 'John',
		last_name: 'Doe',
		email: 'johndoe@gmail.com'
	}
]

app.get('/', function(req,res){
	var title = 'Customers';
	res.render('index', {title: 'Customers', users: users})
})

// app.post('/users/add', function(req,res){
// // When you press submit on the form, this function is called
// 	var newUser = {
// 		first_name: req.body.first_name,
// 		last_name: req.body.last_name,
// 		email: req.body.email
// 	}
// 	console.log(newUser);
// 	// console.log("hello, running app.post")
// });

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

app.get('/receive', function(req,res){
	// res.json(people);		// This just displays in json the json text you displayed above
	// req.body;

	// // Option 2: Just use res.send to send a simple text
	// res.send('Hello');  		// This just displays hello.

	// Option 3: Render from a javascript file
	console.log("test run")
	res.render('index');
});

app.post('/update', function(req,res){
	// var package_body = [1,2,3,4]		// package body will the json file that you want to display on the page
	// res.send(package_body)
	// var json_pack = {
	// 	key: req.body.Key,
	// 	value: req.body.Value
	// }

	// console.log(json_pack);
	// console.log(req.body.Key);
	// console.log("FORM SUBMITTED");
	var keyName1=req.body.item;
	console.log(keyName1);
	res.send("nothing")
})



app.listen(3000, function(){
	console.log('Server started on Port 3000...');
})


// var server = app.listen(process.env.PORT || '8080', function(){
// 	console.log('App listening on port %s', server.address().port);
// 	console.log('Press Ctrl+C to quit')
// });