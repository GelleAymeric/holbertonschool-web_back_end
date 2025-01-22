const http = require('http');
const fs = require('fs').promises;

// Function to process the CSV file asynchronously
async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf-8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check that there is at least one header line
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extract student data, ignoring the header
    const studentData = lines.slice(1);

    // Create a map to count students by field
    const fields = {};
    studentData.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      // Ignore invalid or incomplete lines
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Calculate and display the total number of students
    const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
    let response = `Number of students: ${totalStudents}\n`;

    // Display the number of students per field and their names
    for (const [field, students] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    return response;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  const url = req.url;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    const dbFile = process.argv[2];

    if (!dbFile) {
      res.end('Cannot load the database\n');
      return;
    }

    try {
      const studentsList = await countStudents(dbFile);
      res.end(`This is the list of our students\n${studentsList}`);
    } catch (error) {
      res.end('Cannot load the database\n');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app
module.exports = app;
