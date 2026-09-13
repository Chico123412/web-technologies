type IceCreamSize = "small" | "large";
type IceCreamTopping = "chocolate" | "caramel" | "berries";

const SIZE_PRICES: Record<IceCreamSize, number> = {
    small: 10,
    large: 25,
};

const TOPPING_PRICES: Record<IceCreamTopping, number> = {
    chocolate: 5,
    caramel: 6,
    berries: 10,
};

const MARSHMALLOW_PRICE: number = 5;


function calculateIceCreamCost(
    size: IceCreamSize,
    toppings: IceCreamTopping[],
    hasMarshmallow: boolean
): number {
    let total = SIZE_PRICES[size];

    for (const topping of toppings) {
        total += TOPPING_PRICES[topping];
    }

    if (hasMarshmallow) {
        total += MARSHMALLOW_PRICE;
    }

    return total;
}

function orderIceCream(): void {

    const sizeInput = prompt("Оберіть розмір морозива (small / large):", "small")?.toLowerCase();
    const size: IceCreamSize = sizeInput === "large" ? "large" : "small";


    const toppingsInput = prompt(
        "Оберіть начинки через кому (chocolate, caramel, berries):",
        "chocolate"
    );

    const selectedToppings: IceCreamTopping[] = [];
    if (toppingsInput) {
        const rawToppings = toppingsInput.split(",").map((t) => t.trim().toLowerCase());
        for (const t of rawToppings) {
            if (t === "chocolate" || t === "caramel" || t === "berries") {
                selectedToppings.push(t);
            }
        }
    }


    if (selectedToppings.length === 0) {
        alert("Помилка: потрібно вибрати хоча б одну начинку! Додано шоколад за замовчуванням.");
        selectedToppings.push("chocolate");
    }


    const marshmallowInput = prompt("Додати маршмелоу? (yes / no):", "no")?.toLowerCase();
    const hasMarshmallow: boolean = marshmallowInput === "yes" || marshmallowInput === "так";


    const finalPrice = calculateIceCreamCost(size, selectedToppings, hasMarshmallow);

    const resultMsg = `Ваше замовлення:
- Розмір: ${size} (${SIZE_PRICES[size]} грн)
- Начинки: ${selectedToppings.join(", ")}
- Маршмелоу: ${hasMarshmallow ? "Так (+5 грн)" : "Ні"}
-------------------------
Загальна вартість: ${finalPrice} грн`;

    console.log(resultMsg);
    alert(resultMsg);
}


if (typeof window !== "undefined") {
    orderIceCream();
} else {


    console.log("Тестовий розрахунок для Node.js (без браузера):");
    const testPrice = calculateIceCreamCost("large", ["chocolate", "berries"], true);
    console.log(`Велике морозиво + шоколад + ягоди + маршмелоу = ${testPrice} грн`);
}
