const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Fonction modifiée pour retourner la chaîne au lieu d'afficher
const getStudentsInfo = (path) => new Promise((resolve, reject) => {
  const fs = require('fs');

  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    if (data) {
      const lines = data.trim().split('\n');
      const students = {};
      const headers = lines[0].split(',');

      // Regroupe les étudiants par "field"
      for (const line of lines.slice(1)) {
        if (line.trim() === '') continue; // Ignore lignes vides
        const record = line.split(',');
        const field = record[headers.length - 1];
        if (!students[field]) students[field] = [];
        students[field].push(record[0]); // prénom
      }

      let output = `Number of students: ${lines.length - 1}\n`;
      for (const [field, studentList] of Object.entries(students)) {
        output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      }
      resolve(output.trim());
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const db = process.argv[2];
  let response = 'This is the list of our students\n';

  try {
    const studentData = await getStudentsInfo(db);
    response += studentData;
    res.set('Content-Type', 'text/plain');
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port);

module.exports = app;
