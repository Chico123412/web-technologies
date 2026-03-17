function runTasks() {

    console.log("===== Завдання 1. Оператори порівняння =====")

// 1.1 Максимум і мінімум масиву
    function minMax(arr) {
        let min = arr[0]
        let max = arr[0]

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }

            if (arr[i] > max) {
                max = arr[i]
            }
        }

        return {min, max}
    }

    let numbers = [5, 2, 9, 1, 7, 3]
    let result = minMax(numbers)
    console.log("Мінімум:", result.min)
    console.log("Максимум:", result.max)


// 1.2 Порівняння двох об'єктів
    function compareObjects(obj1, obj2) {

        if (obj1.age === obj2.age && obj1.name === obj2.name) {
            return "Об'єкти однакові"
        } else {
            return "Об'єкти різні"
        }

    }

    let person1 = {name: "Ivan", age: 20}
    let person2 = {name: "Ivan", age: 20}


    console.log(compareObjects(person1, person2))


    console.log("===== Завдання 2. Логічні оператори =====")

// 2.1 Перевірка діапазон

    function inRange(num, min, max) {

        if (num >= min && num <= max) {
            return "Число в діапазоні"
        } else {
            return "Число поза діапазоном"
        }

    }

    console.log(inRange(7, 1, 10))


// 2.2 Логічний NOT

    let state = true

    state = !state

    console.log("Змінений стан:", state)


    console.log("===== Завдання 3. Умовні оператори =====")

// 3.1 Оцінка студента (if)

    function grade(score) {

        if (score >= 90) {
            return "Відмінно"
        } else if (score >= 75) {
            return "Добре"
        } else if (score >= 60) {
            return "Задовільно"
        } else {
            return "Незадовільно"
        }

    }

    console.log("Оцінка:", grade(82))


// 3.1 (тернарний оператор)

    function grade2(score) {

        return score >= 60 ? "Здав" : "Не здав"

    }

    console.log("Результат:", grade2(50))


// 3.2 Сезон за місяцем

    function getSeason(month) {

        if (month == 12 || month == 1 || month == 2) {
            return "Зима"
        } else if (month >= 3 && month <= 5) {
            return "Весна"
        } else if (month >= 6 && month <= 8) {
            return "Літо"
        } else if (month >= 9 && month <= 11) {
            return "Осінь"
        } else {
            return "Невірний місяць"
        }

    }

    console.log("Сезон:", getSeason(4))

}


// 3.3 ?
function getSeason2(month) {

    return (month == 12 || month == 1 || month == 2) ? "Зима" :
        (month >= 3 && month <= 5) ? "Весна" :
            (month >= 6 && month <= 8) ? "Літо" :
                (month >= 9 && month <= 11) ? "Осінь" :
                    "Невірний місяць"

}

console.log("Сезон:", getSeason2(4))
