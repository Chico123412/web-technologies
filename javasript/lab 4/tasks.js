console.log("Лабораторна робота №4")


// Завдання 1


console.log("\nЗавдання 1")

function task1() {
    let fruits = ["яблуко", "банан", "груша", "апельсин"]

    fruits.pop()
    console.log("1. Після видалення останнього елемента:", fruits)

    fruits.unshift("ананас")
    console.log("2. Після додавання 'ананас' на початок:", fruits)

    fruits.sort().reverse()
    console.log("3. Відсортований у зворотному алфавітному порядку:", fruits)

    let index = fruits.indexOf("яблуко")
    console.log("4. Індекс елемента 'яблуко':", index)
}

task1()


// Завдання 2

console.log("\nЗавдання 2")

function task2() {
    let colors = ["синій", "червоний", "темно-синій", "зелений", "жовтий"]

    let longest = colors.reduce((a, b) => a.length > b.length ? a : b)
    let shortest = colors.reduce((a, b) => a.length < b.length ? a : b)

    console.log("1. Масив кольорів:", colors)
    console.log("2. Найдовший елемент:", longest)
    console.log("2. Найкоротший елемент:", shortest)

    let onlyBlue = colors.filter(color => color.includes("синій"))
    console.log("3. Лише елементи з словом 'синій':", onlyBlue)

    let joined = onlyBlue.join(", ")
    console.log("4-5. Об'єднаний рядок:", joined)
}

task2()


// Завдання 3

console.log("\nЗавдання 3")

function task3() {
    let employees = [
        {name: "Іван", age: 25, position: "розробник"},
        {name: "Марія", age: 30, position: "тестувальник"},
        {name: "Андрій", age: 28, position: "розробник"},
        {name: "Олена", age: 35, position: "менеджер"},
    ]

    employees.sort((a, b) => a.name.localeCompare(b.name))
    console.log("1-2. Відсортований масив працівників:", employees)

    let developers = employees.filter(emp => emp.position === "розробник")
    console.log("3. Працівники з посадою 'розробник':", developers)

    employees = employees.filter(emp => emp.age !== 35)
    console.log("4. Після видалення працівника за віком 35:", employees)

    employees.push({name: "Сергій", age: 27, position: "дизайнер"})
    console.log("5. Після додавання нового працівника:", employees)
}

task3()


// Завдання 4

console.log("\nЗавдання 4")

function task4() {
    let students = [
        {name: "Олексій", age: 20, course: 2},
        {name: "Ірина", age: 22, course: 3},
        {name: "Максим", age: 19, course: 1},
        {name: "Наталія", age: 21, course: 4},
    ]

    students = students.filter(student => student.name !== "Олексій")
    console.log("2. Після видалення студента 'Олексій':", students)

    students.push({name: "Тарас", age: 23, course: 2})
    console.log("3. Після додавання нового студента:", students)

    students.sort((a, b) => b.age - a.age)
    console.log("4. Відсортовані за віком (від старшого до молодшого):", students)

    let thirdCourseStudent = students.find(student => student.course === 3)
    console.log("5. Студент 3 курсу:", thirdCourseStudent)
}

task4()


// Завдання 5

console.log("\nЗавдання 5")

function task5() {
    let numbers = [1, 2, 3, 4, 5]

    let squares = numbers.map(num => num * num)
    console.log("1. Квадрати чисел:", squares)

    let evenNumbers = numbers.filter(num => num % 2 === 0)
    console.log("2. Парні числа:", evenNumbers)

    let sum = numbers.reduce((acc, num) => acc + num, 0)
    console.log("3. Сума всіх елементів:", sum)

    let extraNumbers = [6, 7, 8, 9, 10]
    numbers = numbers.concat(extraNumbers)
    console.log("4. Після додавання 5 чисел:", numbers)

    numbers.splice(0, 3)
    console.log("5. Після видалення перших 3 елементів:", numbers)
}

task5()


// Завдання 6

console.log("\nЗавдання 6")

function libraryManagement() {
    let books = [
        {title: "Гобіт", author: "Дж. Р. Р. Толкін", genre: "Фентезі", pages: 310, isAvailable: true},
        {title: "1984", author: "Джордж Орвелл", genre: "Антиутопія", pages: 328, isAvailable: true},
        {title: "Кобзар", author: "Тарас Шевченко", genre: "Поезія", pages: 250, isAvailable: true},
    ]

    function addBook(title, author, genre, pages) {
        books.push({title, author, genre, pages, isAvailable: true})
    }

    function removeBook(title) {
        books = books.filter(book => book.title !== title)
    }

    function findBooksByAuthor(author) {
        return books.filter(book => book.author === author)
    }

    function toggleBookAvailability(title, isBorrowed) {
        let book = books.find(book => book.title === title)
        if (book) {
            book.isAvailable = !isBorrowed
        }
    }

    function sortBooksByPages() {
        books.sort((a, b) => a.pages - b.pages)
    }

    function getBooksStatistics() {
        let totalBooks = books.length
        let availableBooks = books.filter(book => book.isAvailable).length
        let borrowedBooks = totalBooks - availableBooks
        let avgPages = totalBooks
            ? books.reduce((sum, book) => sum + book.pages, 0) / totalBooks
            : 0

        return {
            totalBooks,
            availableBooks,
            borrowedBooks,
            avgPages,
        }
    }

    console.log("Початкові книги:", books)

    addBook("Місто", "Валер'ян Підмогильний", "Роман", 290)
    console.log("Після додавання книги:", books)

    removeBook("1984")
    console.log("Після видалення книги '1984':", books)

    console.log("Книги автора 'Тарас Шевченко':", findBooksByAuthor("Тарас Шевченко"))

    toggleBookAvailability("Гобіт", true)
    console.log("Після позначення книги 'Гобіт' як взятої:", books)

    sortBooksByPages()
    console.log("Після сортування за кількістю сторінок:", books)

    console.log("Статистика книг:", getBooksStatistics())
}

libraryManagement()


// Завдання 7

console.log("\nЗавдання 7")

function task7() {
    let student = {
        name: "Оксана",
        age: 20,
        course: 2,
    }

    student.subjects = ["Математика", "Програмування", "Англійська"]
    delete student.age

    console.log("Оновлений об'єкт студента:", student)
}

task7()
