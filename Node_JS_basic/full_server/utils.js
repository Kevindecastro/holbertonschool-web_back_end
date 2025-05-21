import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');
      const students = {};

      for (const line of lines.slice(1)) {
        if (line.trim() === '') continue;
        const record = line.split(',');
        const field = record[headers.length - 1];
        if (!students[field]) students[field] = [];
        students[field].push(record[0]); // firstname assumed first column
      }
      resolve(students);
    });
  });
}
