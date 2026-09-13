function greetUser(name: string, times: number = 1): void {
    console.log(`Привітання для ${name} (${times} раз/рази):`);
    for (let i = 0; i < times; i++) {
        console.log(`  ${i + 1}. Привіт, ${name}!`);
    }
}

console.log("--- Виклик без другого параметра (дефолт = 1) ---");
greetUser("Олексій");

console.log("\n--- Виклик із явним другим параметром (3) ---");
greetUser("Богдан", 3);
