// 10. Fonction mettant à jour les éléments d'un Map
export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) throw new Error('Cannot process');
    map.forEach((value, key) => {
        if (value === 1) map.set(key, 100);
    });
}
