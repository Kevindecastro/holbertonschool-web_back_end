/* eslint-disable */
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
    constructor(brand, motor, color) {
        this[_brand] = brand;
        this[_motor] = motor;
        this[_color] = color;
    }

    cloneCar() {
        // Créer un nouveau clone avec les mêmes propriétés
        const clonedCar = new Car(this[_brand], this[_motor], this[_color]);
        return clonedCar;
    }

    // Getter pour les propriétés
    get brand() {
        return this[_brand];
    }

    get motor() {
        return this[_motor];
    }

    get color() {
        return this[_color];
    }
}
