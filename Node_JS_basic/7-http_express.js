const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', (req, res) => {
  if (!database) return res.status(500).send('This is the list of our students\nCannot load the database');

  fs.readFile(database, 'utf8', (err, data) => {
    if (err) return res.status(500).send('This is the list of our students\nCannot load the database');

    const students = data.split('\n').filter((line) => line.trim() !== '').slice(1);
    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      fields[field] = fields[field] || [];
      fields[field].push(firstname);
    });

    let response = 'This is the list of our students\n';
    response += `Number of students: ${students.length}\n`;
    Object.entries(fields).forEach(([field, names]) => {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    });

    res.send(response);
  });
});

app.listen(1245, () => console.log('Server is running on port 1245'));

module.exports = app;