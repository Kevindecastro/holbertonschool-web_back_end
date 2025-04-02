// 4. Fonction mettant à jour les notes des étudiants par ville
export default function updateStudentGradeByCity(list, city, newGrades) {
    return list.filter(student => student.location === city)// Sélectionne les étudiants de la ville
               .map(student => {
                   const gradeObj = newGrades.find(g => g.studentId === student.id);
                   return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };// Ajoute la note ou 'N/A' si non trouvée
               });
}
