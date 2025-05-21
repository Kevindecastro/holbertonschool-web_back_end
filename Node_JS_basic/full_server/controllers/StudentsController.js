import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2];
    try {
      const students = await readDatabase(dbPath);
      let response = 'This is the list of our students\n';

      const sortedFields = Object.keys(students).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      for (const field of sortedFields) {
        const list = students[field].join(', ');
        response += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
      }
      res.status(200).type('text/plain').send(response.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2];
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(dbPath);
      if (!students[major]) {
        res.status(200).send('List: ');
        return;
      }
      const list = students[major].join(', ');
      res.status(200).type('text/plain').send(`List: ${list}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
