const fs = require('fs').promises;

async function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split the data into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Remove the header line
      const students = lines.slice(1);

      // Initialize an object to store counts and lists of students by field
      const fields = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      // Log the total number of students
      console.log(`Number of students: ${students.length}`);

      // Log the number of students and their names for each field
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch((error) => {
      // Throw an error if the database cannot be loaded
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
