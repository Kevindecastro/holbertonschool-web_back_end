const fs = require('fs');

/**
 * Lit un fichier CSV contenant une liste d'étudiants et affiche :
 * - Le nombre total d'étudiants
 * - Le nombre d'étudiants par filière
 * - La liste des prénoms d'étudiants par filière
 *
 * @param {string} path - Chemin vers le fichier CSV
 */
function countStudents(path) {
  try {
    // Lecture synchronisée du fichier et suppression des lignes vides
    const data = fs.readFileSync(path, 'utf8')
    .split('\n')
    .filter(line => line.trim() !== '');

    // Extraction des lignes de données
    const students = data.slice(1)
    .map(line => line.split(','))
    .filter(cols => cols.length >= 4);

    // Affichage du nombre total d'étudiants
    console.log(`Number of students: ${students.length}`);

    // Création d'un objet pour regrouper les étudiants par filière
    const fields = {};
    for (const [firstname, , , field] of students) {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
    }
    // Affichage du nombre d'étudiants et de la liste des prénoms pour chaque filière
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }

  } catch (error) {
    // Gestion des erreurs si le fichier ne peut pas être lu
        throw Error('Cannot load the database');
    }
}

module.exports = countStudents;
