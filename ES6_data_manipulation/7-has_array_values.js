// 7. Fonction vérifiant si tous les éléments d'un tableau sont dans un Set
export default function hasValuesFromArray(set, array) {
    return array.every(value => set.has(value));
}
