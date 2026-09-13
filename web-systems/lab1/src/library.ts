interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;

    borrow(): void;
}

class Book implements LibraryItem {
    public title: string;
    public author: string;
    public pagesCount: number;
    public isBorrowed: boolean = false;

    constructor(title: string, author: string, pagesCount: number) {
        this.title = title;
        this.author = author;
        this.pagesCount = pagesCount;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`[Помилка] Книга "${this.title}" вже позичена!`);
            return;
        }
        this.isBorrowed = true;
        console.log(`[Успіх] Ви позичили книгу "${this.title}" (${this.pagesCount} стор.).`);
    }
}

class Magazine implements LibraryItem {
    public title: string;
    public author: string;
    public issueNumber: number;
    public isBorrowed: boolean = false;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`[Помилка] Журнал "${this.title}" (Випуск №${this.issueNumber}) вже на руках!`);
            return;
        }
        this.isBorrowed = true;
        console.log(`[Успіх] Ви позичили журнал "${this.title}" (Випуск №${this.issueNumber}).`);
    }
}

class DVD implements LibraryItem {
    public title: string;
    public author: string; // Режисер або виконавець
    public durationMinutes: number;
    public isBorrowed: boolean = false;

    constructor(title: string, author: string, durationMinutes: number) {
        this.title = title;
        this.author = author;
        this.durationMinutes = durationMinutes;
    }

    borrow(): void {
        if (this.isBorrowed) {
            console.log(`[Помилка] DVD "${this.title}" уже позичено!`);
            return;
        }
        this.isBorrowed = true;
        console.log(`[Успіх] Ви позичили диск "${this.title}" (Тривалість: ${this.durationMinutes} хв).`);
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`[Каталог] Додано: "${item.title}" (${item.author})`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find((item) => item.title.toLowerCase() === name.toLowerCase());
    }

    listAvailableItems(): void {
        console.log("\n=== ДОСТУПНІ ЕЛЕМЕНТИ БІБЛІОТЕКИ ===");
        const available = this.items.filter((item) => !item.isBorrowed);

        if (available.length === 0) {
            console.log("Наразі немає доступних матеріалів.");
            return;
        }

        available.forEach((item, index) => {
            console.log(`${index + 1}. "${item.title}" — Автор: ${item.author}`);
        });
    }
}

const cityLibrary = new Library();

const book1 = new Book("Кобзар", "Тарас Шевченко", 350);
const book2 = new Book("Clean Code", "Robert Martin", 464);
const mag1 = new Magazine("National Geographic", "Редакція NG", 284);
const dvd1 = new DVD("Інтерстеллар", "Крістофер Нолан", 169);

cityLibrary.addItem(book1);
cityLibrary.addItem(book2);
cityLibrary.addItem(mag1);
cityLibrary.addItem(dvd1);

cityLibrary.listAvailableItems();

console.log("\n--- Процес позичення ---");
book1.borrow();
book1.borrow();
dvd1.borrow();

console.log("\n--- Пошук у каталозі ---");
const searchTarget = cityLibrary.findItemByName("Clean Code");
if (searchTarget) {
    console.log(`Знайдено: "${searchTarget.title}" автора ${searchTarget.author}. Позичено? ${searchTarget.isBorrowed ? "Так" : "Ні"}`);
}

cityLibrary.listAvailableItems();
