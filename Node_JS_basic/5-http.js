const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('This is the list of our students');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
