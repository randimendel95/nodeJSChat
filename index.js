
//require express, http server, and socket.io
var express = require('express');
var http = require('http');


//create variable called "app", that relies on express
var app = express();
//create a variable called "server" on the app to create and run the http server
var http = http.Server(app);
//create a variable called "io" that runs socket.io on the http server
var io = require('socket.io')(http);

//get the directory from "app" and send it the file '/index.html' 
//index.html is an html file that we have created for you to make the chat button and input on the page

app.get('/static', function(req, res){
    app.use(express.static(__dirname + '/static'));
 //   res.sendFile(__dirname + 'static/index.html');
    //app.use(express.static('static'));

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