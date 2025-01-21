const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const app = express();
const port = 1245;

// Define a route handler for the root URL path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route handler for the /students URL path
app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    // Call the countStudents function and await its result
    const students = await countStudents(DATABASE);
    // Send the response with the list of students
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    // Send the response with the error message if an error occurs
    res.send(`${msg}${error.message}`);
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Uncomment the line below to log a message when the server starts
  // console.log(`Example app listening at http://localhost:${port}`);
});

// Export the app for use in other files
module.exports = app;
