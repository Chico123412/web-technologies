interface Shape {
    name: string;

    getArea(): number;

    getPerimeter(): number;

    scale(factor: number): void;
}

class Circle implements Shape {
    name: string = "Коло";
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}


class Rectangle implements Shape {
    name: string = "Прямокутник";
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}


class Triangle implements Shape {
    name: string = "Трикутник";
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }

    getArea(): number {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    scale(factor: number): void {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}


const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];

console.log("--- Початкові розміри фігур ---");
shapes.forEach((shape) => {
    console.log(
        `${shape.name} -> Площа: ${shape.getArea().toFixed(2)}, Периметр: ${shape.getPerimeter().toFixed(2)}`
    );
});


console.log("\n--- Масштабування фігур у 2 рази ---");
shapes.forEach((shape) => shape.scale(2));


let totalArea = 0;
let totalPerimeter = 0;

shapes.forEach((shape) => {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
});

console.log(`Загальна площа всіх фігур: ${totalArea.toFixed(2)}`);
console.log(`Загальний периметр усіх фігур: ${totalPerimeter.toFixed(2)}`);
