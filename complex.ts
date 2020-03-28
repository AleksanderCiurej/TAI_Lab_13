class Complex{
    private real: number;
    private imaginary: number;

    constructor(real: number,imaginary: number){
        this.real = real;
        this.imaginary = imaginary;
    }

    add(comp: Complex): Complex{
        return new Complex(this.real + comp.real, this.imaginary + comp.imaginary);
    }

    sub(comp: Complex): Complex{
        return new Complex(this.real - comp.real, this.imaginary - comp.imaginary);
    }

    mod() {
        return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
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
