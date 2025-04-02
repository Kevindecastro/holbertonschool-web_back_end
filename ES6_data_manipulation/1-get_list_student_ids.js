/* eslint-disable */
// 1. Fonction retournant un tableau des identifiants des étudiants
export default function getListStudentIds(list) {
    if (!Array.isArray(list)) return [];// Vérifie si l'entrée est un tableau
    return list.map(student => student.id);
}
