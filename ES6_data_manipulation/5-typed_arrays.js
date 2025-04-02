// 5. Fonction créant un ArrayBuffer et stockant un Int8
export default function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    if (position >= length) throw new Error('Position outside range');
    view.setInt8(position, value);// Stocke la valeur à la position spécifiée
    return view;
}
