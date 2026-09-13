interface Payable {
    pay(): void;
}

abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;
}


class Developer extends Employee implements Payable {
    public programmingLanguage: string;

    constructor(name: string, age: number, salary: number, programmingLanguage: string) {
        super(name, age, salary);
        this.programmingLanguage = programmingLanguage;
    }

    getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    pay(): void {
        console.log(`Виплата розробнику ${this.name}: зарплата ${this.salary} грн, бонус ${this.getAnnualBonus()} грн.`);
    }
}


class Manager extends Employee implements Payable {
    public teamSize: number;

    constructor(name: string, age: number, salary: number, teamSize: number) {
        super(name, age, salary);
        this.teamSize = teamSize;
    }

    getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    pay(): void {
        console.log(`Виплата менеджеру ${this.name}: зарплата ${this.salary} грн, бонус ${this.getAnnualBonus()} грн.`);
    }
}


const team: (Employee & Payable)[] = [
    new Developer("Іван", 25, 80000, "TypeScript"),
    new Developer("Марія", 28, 95000, "Go"),
    new Manager("Олександр", 35, 120000, 8),
    new Manager("Олена", 32, 110000, 5),
];

console.log("=== ВІДОМІСТЬ ВИПЛАТ СПІВРОБІТНИКАМ ===");
let totalAnnualBonus = 0;

team.forEach((employee) => {
    employee.pay();
    totalAnnualBonus += employee.getAnnualBonus();
});

console.log("-----------------------------------------");
console.log(`Загальна річна сума бонусів: ${totalAnnualBonus.toLocaleString()} грн`);
