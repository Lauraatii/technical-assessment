// I'm importing the express library, which simplifies the creation of a server in Node.js.
// Express was chosen because it's lightweight, flexible, and provides a strong set of features for web apps.
const express = require('express');

// Instance of express which I can use to define routes, middleware, and the server's listening port.
const app = express();

// Defining the port on which my server will listen for requests.
const port = 3000;

// I'm telling my express application to use the built-in middleware function express.static. 
// This function is used to serve static files. I'm serving files from the 'dist' directory in my project.
app.use(express.static('dist'));

// This sets a route for root path of my website ('/'). 
// When a GET request is made to the root path, I'm sending the index.html file located in my 'src' directory as a response.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

// I'm telling my express app to listen for incoming requests on the defined port. 
// The second argument is a callback function that is executed once the server is running and ready to receive requests.
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
