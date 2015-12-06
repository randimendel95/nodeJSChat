
//require express, http server, and socket.io
var express = require('express');
var http = require('http');
var socket = require('socket.io');

//create variable called "app", that relies on express
var app = express();
//create a variable called "server" on the app to create and run the http server
var http = http.Server(app);
//create a variable called "io" that runs socket.io on the http server
var io = socket(http);

//get the directory from "app" and send it the file '/index.html' 
//index.html is an html file that we have created for you to make the chat button and input on the page

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//on the "io" variable, when there is a connection, execute a function that emits the chat message when one is sent
io.on('connection', function(socket){
        socket.on('chat message', function(msg){
                io.emit('chat message', msg);
        });
});

http.listen(3000, function(){
        console.log('listening on *:3000');
});