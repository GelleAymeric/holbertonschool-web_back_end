const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Handle the root route "/"
  if (req.url === '/') {
    res.statusCode = 200; // HTTP status code 200 (OK)
    res.end('Hello Holberton School!\n');
  } else {
    // Handle unknown routes
    res.statusCode = 404; // HTTP status code 404 (Not Found)
    res.end('Not Found\n');
  }
});

// Start the server on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the server for testing
module.exports = app;
