interface Animal {
    name: string;
    age: number;


    wingspan?: number;
    numberOfPaws?: number;
    isPredator?: boolean;


    move(): void;

    makeSound?(): void;
}

class Cat implements Animal {
    name: string;
    age: number;
    numberOfPaws: number;

    constructor(name: string, age: number, numberOfPaws: number = 4) {
        this.name = name;
        this.age = age;
        this.numberOfPaws = numberOfPaws;
    }

    move(): void {
        console.log(`${this.name} біжить на своїх ${this.numberOfPaws} лапках.`);
    }

    makeSound(): void {
        console.log(`${this.name} нявчить: Мяу-мяу!`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;
    wingspan: number;

    constructor(name: string, age: number, wingspan: number) {
        this.name = name;
        this.age = age;
        this.wingspan = wingspan;
    }

    move(): void {
        console.log(`${this.name} летить у небі з розмахом крил ${this.wingspan} см.`);
    }

    makeSound(): void {
        console.log(`${this.name} цвірінькає: Чік-чирик!`);
    }
}

class Fish implements Animal {
    name: string;
    age: number;
    isPredator: boolean;

    constructor(name: string, age: number, isPredator: boolean = false) {
        this.name = name;
        this.age = age;
        this.isPredator = isPredator;
    }

    move(): void {
        const predatorInfo = this.isPredator ? "хижак" : "мирна рибка";
        console.log(`${this.name} плаває у воді (${predatorInfo}).`);
    }

}


console.log("--- Демонстрація тварин ---");
const tom = new Cat("Том", 3);
tom.move();
tom.makeSound();

const kiwi = new Bird("Ківі", 1, 25);
kiwi.move();
kiwi.makeSound();

const nemo = new Fish("Немо", 2, false);
nemo.move();
