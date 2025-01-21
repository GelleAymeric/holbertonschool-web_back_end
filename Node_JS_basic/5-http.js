const http = require('http');
const fs = require('fs');

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  // Handle root URL path
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') { // Handle /students URL path
    const database = process.argv[2];

    // Check if the database argument is provided
    if (!database) {
      res.statusCode = 500;
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    // Read the database file
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('This is the list of our students\nCannot load the database');
        return;
      }

      // Split the file content into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      // Ignore the first line (header) and get the student data
      const students = lines.slice(1);

      const fields = {};
      // Process each student line
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      // Build the response string
      let response = 'This is the list of our students\n';
      response += `Number of students: ${students.length}\n`;

      // Add the number of students in each field to the response
      for (const [field, names] of Object.entries(fields)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      res.statusCode = 200;
      res.end(response);
    });
  } else { // Handle unknown routes
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app
module.exports = app;
