const http = require('http');
const fs = require('fs').promises;

// Fonction pour traiter le fichier CSV de manière asynchrone
async function countStudents(path) {
  try {
    // Lire le fichier de manière asynchrone
    const data = await fs.readFile(path, 'utf-8');

    // Diviser les données en lignes et filtrer les lignes vides
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Vérifier qu'il y a au moins une ligne d'en-tête
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extraire les données des étudiants en ignorant l'en-tête
    const studentData = lines.slice(1);

    // Créer une carte pour compter les étudiants par domaine
    const fields = {};
    studentData.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      // Ignorer les lignes invalides ou incomplètes
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Calculer et afficher le nombre total d'étudiants
    const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
    let response = `Number of students: ${totalStudents}\n`;

    // Afficher le nombre d'étudiants par domaine et leurs noms
    for (const [field, students] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    return response;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Créer le serveur HTTP
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

// Le serveur écoute sur le port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Exporter l'application
module.exports = app;
