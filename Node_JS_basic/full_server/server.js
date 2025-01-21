import express from 'express';
import mapRoutes from './routes/index';

const app = express();
const PORT = process.env.PORT || 1245; // Use environment variable or default to 1245

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle port in use error
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is already in use. Trying another port...`);
    const newPort = PORT + 1;
    server.listen(newPort);
  } else {
    console.error('Server error:', err);
  }
});

mapRoutes(app);

module.exports = app;
