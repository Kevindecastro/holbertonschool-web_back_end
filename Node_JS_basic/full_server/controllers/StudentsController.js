import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const database = process.argv[2];
    readDatabase(database)
      .then((data) => {
        const lines = ['This is the list of our students'];
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        for (const field of fields) {
          const list = data[field].join(', ');
          lines.push(`Number of students in ${field}: ${data[field].length}. List: ${list}`);
        }
        res.status(200).send(lines.join('\n'));
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const database = process.argv[2];
    readDatabase(database)
      .then((data) => {
        const students = data[major];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
