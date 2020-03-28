"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(comp) {
        return new Complex(this.real + comp.real, this.imaginary + comp.imaginary);
    }
    sub(comp) {
        return new Complex(this.real - comp.real, this.imaginary - comp.imaginary);
    }
    mod() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log(`Complex: real=${this.real} imaginary=${this.imaginary}`);
    }
}
let complex1 = new Complex(1.0, 1.0);
let complex2 = new Complex(2.0, 2.0);
let complexAdd = complex1.add(complex2);
complexAdd.toString();
let complexSub = complexAdd.sub(complex1);
complexSub.toString();
console.log(`mod: ${complexSub.mod()}`);
