abstract class Car {
    public brand: string;
    public model: string;
    public year: number;
    protected mileage: number;
    private vinCode: string;

    constructor(brand: string, model: string, year: number, mileage: number, vinCode: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.vinCode = vinCode;
    }


    public getVinCode(): string {
        return this.vinCode;
    }


    abstract displayInfo(): void;
}


class BMW extends Car {
    public hasMpackage: boolean;

    constructor(model: string, year: number, mileage: number, vinCode: string, hasMpackage: boolean) {
        super("BMW", model, year, mileage, vinCode);
        this.hasMpackage = hasMpackage;
    }

    displayInfo(): void {
        console.log(`[BMW] Модель: ${this.model}, Рік: ${this.year}`);
        console.log(`  Пробіг: ${this.mileage} км, M-пакет: ${this.hasMpackage ? "Так" : "Ні"}`);
        console.log(`  VIN: ${this.getVinCode()}`);
    }
}


class Audi extends Car {
    public quattro: boolean;

    constructor(model: string, year: number, mileage: number, vinCode: string, quattro: boolean) {
        super("Audi", model, year, mileage, vinCode);
        this.quattro = quattro;
    }

    displayInfo(): void {
        console.log(`[Audi] Модель: ${this.model}, Рік: ${this.year}`);
        console.log(`  Пробіг: ${this.mileage} км, Повний привід Quattro: ${this.quattro ? "Так" : "Ні"}`);
        console.log(`  VIN: ${this.getVinCode()}`);
    }
}


class Tesla extends Car {
    public batteryCapacity: number; // кВт·год
    private autopilotEnabled: boolean;

    constructor(
        model: string,
        year: number,
        mileage: number,
        vinCode: string,
        batteryCapacity: number,
        autopilotEnabled: boolean
    ) {
        super("Tesla", model, year, mileage, vinCode);
        this.batteryCapacity = batteryCapacity;
        this.autopilotEnabled = autopilotEnabled;
    }

    displayInfo(): void {
        console.log(`[Tesla] Модель: ${this.model}, Рік: ${this.year}`);
        console.log(`  Пробіг: ${this.mileage} км, Батарея: ${this.batteryCapacity} кВт·год`);
        console.log(`  Автопілот: ${this.autopilotEnabled ? "Увімкнено" : "Вимкнено"}`);
        console.log(`  VIN: ${this.getVinCode()}`);
    }
}


const bmw1 = new BMW("M5 F90", 2021, 45000, "WBA11111111", true);
const bmw2 = new BMW("320d", 2018, 140000, "WBA22222222", false);

const audi1 = new Audi("RS6 Avant", 2022, 28000, "WAU33333333", true);
const audi2 = new Audi("A4 B9", 2019, 110000, "WAU44444444", false);

const tesla1 = new Tesla("Model S Plaid", 2023, 15000, "5YJ55555555", 100, true);
const tesla2 = new Tesla("Model 3 Standard", 2020, 65000, "5YJ66666666", 60, false);


const garage: Car[] = [bmw1, bmw2, audi1, audi2, tesla1, tesla2];

console.log("=== СПИСОК АВТОМОБІЛІВ У ГАРАЖІ ===\n");
garage.forEach((car) => {
    car.displayInfo();
    console.log("------------------------------------");
});
