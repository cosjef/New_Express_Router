// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;

// ROUTES
// ==============================================


// sample route with a route the old 3.0 way
app.get('/sample', function(req, res) {
	res.send('this is a sample');
})

// we'll create our routes here



// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);