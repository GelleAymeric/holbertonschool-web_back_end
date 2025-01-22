const express = require('express');

const app = express();

// Define a route handler for the root URL path
app.get('/', (req, res) => {
  // Send a response with the text 'Hello Holberton School!'
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the app for use in other files
module.exports = app;
