const http = require('http');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(databaseFile)
      .then(() => {
        // Les infos sont déjà affichées dans la console par countStudents.
        // On relit le fichier juste pour répondre au client avec les mêmes infos.

        const fs = require('fs');
        fs.readFile(databaseFile, 'utf-8', (err, data) => {
          if (err) {
            res.end('Cannot load the database');
            return;
          }

          const fileLines = data
            .toString('utf-8')
            .trim()
            .split('\n');

          const studentGroups = {};
          const dbFieldNames = fileLines[0].split(',');
          const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

          for (const line of fileLines.slice(1)) {
            if (line.trim() === '') continue; // ignorer les lignes vides
            const studentRecord = line.split(',');
            const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
            }
            const studentEntries = studentPropNames
              .map((propName, idx) => [propName, studentPropValues[idx]]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
          }

          const totalStudents = Object
            .values(studentGroups)
            .reduce((pre, cur) => pre + cur.length, 0);

          res.write(`Number of students: ${totalStudents}\n`);
          for (const [field, group] of Object.entries(studentGroups)) {
            const studentNames = group.map((student) => student.firstname).join(', ');
            res.write(`Number of students in ${field}: ${group.length}. List: ${studentNames}\n`);
          }

          res.end();
        });
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1245);
module.exports = app;
