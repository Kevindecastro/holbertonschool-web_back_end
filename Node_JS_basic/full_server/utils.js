import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const headers = lines.shift().split(',');
      const fieldIndex = headers.indexOf('field');
      const firstnameIndex = headers.indexOf('firstname');
      const result = {};

      for (const line of lines) {
        const parts = line.split(',');
        const field = parts[fieldIndex];
        const firstname = parts[firstnameIndex];

        if (!result[field]) result[field] = [];
        result[field].push(firstname);
      }

      resolve(result);
    });
  });
}
