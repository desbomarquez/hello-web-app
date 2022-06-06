//const { response } = require('express');
var express = require('express');
var app = express();

// routes

app.get('/', function(request, response){
    response.send('Hello, worlddddd');
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});