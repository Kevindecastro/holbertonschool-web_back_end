// 2. Fonction filtrant les étudiants selon leur ville
export default function getStudentsByLocation(list, city) {
    return list.filter(student => student.location === city);
}
