// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;


// ROUTES
// ==============================================


// sample route with a route the old 3.0 way
//app.get('/sample', function(req, res) {
//	res.send('this is a sample');
//})

// we'll create our routes here

// get an instance of a router
var router = express.Router();


// route middleware that will happen on every request
// do something before the request is processed
// We’ll use router.use() to define middleware
router.use(function(req, res, next) {
	
// route with parameters (http://localhost:8080/hello/:name)
		router.get('/hello/:name', function(req, res) {
			res.send('hello ' + req.params.name + '!');
			
		});		
// log each request to the console
	console.log(req.method, req.url);
	
	// continue doing what we were doing and go to the route
	next();
	
});


app.route('/login')

// show the form (GET http://localhost:8080/login)
	.get(function(req, res) {
		res.send('this is the login form');
	})
	
	// process the form (POST http://localhost:8080/login)
		.post(function(req, res) {
			console.log('processing');
			res.send('processing the login from!');
		});



// home page route (http://localhost:8080)
	router.get('/', function(req, res) {
		res.send('im the home page!');
	});
	
// about page route (http://locahost:8080/about)
	router.get('/about', function(req, res) {
		res.send('im the about page!');
	});

// apply the routes to our application
	app.use('/', router);



// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);