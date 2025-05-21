# Full Server Project (Holberton School)

This is a basic Node.js + Express server that uses ES6 syntax and Babel to manage student data from a CSV file.

## 📁 Project Structure

```

full\_server/
├── controllers/
│   ├── AppController.js
│   └── StudentsController.js
├── routes/
│   └── index.js
├── utils.js
├── server.js
├── package.json
├── .babelrc
└── ../database.csv

````

## 🚀 Running the Server

1. Install dependencies:
```bash
npm install
````

2. Start the server:

```bash
npm run dev -- ../database.csv
```

3. Available routes:

| Route                 | Description                    |
| --------------------- | ------------------------------ |
| `/`                   | Hello message                  |
| `/students`           | List all students by major     |
| `/students/CS`        | Students in CS                 |
| `/students/SWE`       | Students in SWE                |
| `/students/<invalid>` | Error (only CS or SWE allowed) |

## ✅ Example Output

```bash
curl localhost:1245/students
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

---
