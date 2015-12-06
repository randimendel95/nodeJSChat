//require express, http server, and socket.io using the variables 'express', 'http', and 'socket'


//create variable called "app", which is an express application


//create a variable called "http" that uses the express "app" as its server


//create a variable called "io" that runs socket.io on the http server


//Get the "app" and send it the file '/index.html' which is provided in the repo
//hint: use the function .sendFile(__dirname + {file location & name})


//on the "io" variable, when there is a connection, execute a function that emits the chat message when one is sent
//use the .on() method to execute a function on the "io" variable when there is a connection and on the "socket" variable when there is a chat message
//then on the "io" use the .emit function to emit msg when there is a chat message.


//listen at the http server, using port 3000 
//Choose a number, then add a console.log() statement to tell you where the server is listening to your requests
