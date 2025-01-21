import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then(fields => {
        let response = 'This is the list of our students\n';
        Object.keys(fields).sort().forEach(field => {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });
        res.status(200).send(response.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then(fields => {
        const students = fields[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
