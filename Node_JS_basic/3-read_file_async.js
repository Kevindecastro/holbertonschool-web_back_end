const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((line) => line.trim() !== '');

        const fields = {};
        for (const student of students) {
          const [firstname, , , field] = student.split(',');

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }

        console.log(`Number of students: ${students.length}`);
        for (const [field, names] of Object.entries(fields)) {
          console.log(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
          );
        }

        resolve();
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
