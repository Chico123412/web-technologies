let userName: string = "Олексій";
let userAge: number = 20;
let isStudent: boolean = true;
let dynamicData: any = "Початковий текст (any)";

console.log("--- Базові типи ---");
console.log(`Ім'я: ${userName} (тип: ${typeof userName})`);
console.log(`Вік: ${userAge} (тип: ${typeof userAge})`);
console.log(`Студент: ${isStudent} (тип: ${typeof isStudent})`);
console.log(`Any до зміни: ${dynamicData}`);


dynamicData = 42;
console.log(`Any після зміни: ${dynamicData} (тип: ${typeof dynamicData})`);


let skills: string[] = ["TypeScript", "JavaScript", "HTML", "CSS"];
let scores: Array<number> = [95, 87, 92, 100];

console.log("\n--- Масиви ---");
console.log("Навички:", skills);
console.log("Оцінки:", scores);
