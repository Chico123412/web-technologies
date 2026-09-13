interface Course {
    courseName: string;
    durationHours: number;
    students: string[];
}


class OnlineCourse implements Course {
    public courseName: string;
    public durationHours: number;
    public students: string[];

    constructor(courseName: string, durationHours: number) {
        this.courseName = courseName;
        this.durationHours = durationHours;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (this.isStudentRegistered(student)) {
            console.log(`[Увага] Студент ${student} вже зареєстрований на курс "${this.courseName}".`);
            return;
        }
        this.students.push(student);
        console.log(`[Успіх] Студента ${student} успішно додано до курсу "${this.courseName}".`);
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}


class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        const exists = this.courses.some(
            (c) => c.courseName.toLowerCase() === course.courseName.toLowerCase()
        );
        if (exists) {
            console.log(`[Помилка] Курс "${course.courseName}" уже існує.`);
            return;
        }
        this.courses.push(course);
        console.log(`[Курс додано] "${course.courseName}" (${course.durationHours} год.)`);
    }

    removeCourse(courseName: string): void {
        const initialLength = this.courses.length;
        this.courses = this.courses.filter(
            (c) => c.courseName.toLowerCase() !== courseName.toLowerCase()
        );
        if (this.courses.length < initialLength) {
            console.log(`[Курс видалено] "${courseName}"`);
        } else {
            console.log(`[Помилка] Курс "${courseName}" не знайдено для видалення.`);
        }
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(
            (c) => c.courseName.toLowerCase() === courseName.toLowerCase()
        );
    }

    printAllCourses(): void {
        console.log("\n=== СПИСОК УСІХ КУРСІВ ТА СТУДЕНТІВ ===");
        if (this.courses.length === 0) {
            console.log("Курсів поки немає.");
            return;
        }

        this.courses.forEach((course) => {
            console.log(`Курс: ${course.courseName} | Тривалість: ${course.durationHours} год.`);
            if (course.students.length === 0) {
                console.log("  Студентів ще немає.");
            } else {
                console.log(`  Студенти (${course.students.length}): ${course.students.join(", ")}`);
            }
        });
    }
}


const manager = new CourseManager();


const tsCourse = new OnlineCourse("TypeScript Basics", 40);
const reactCourse = new OnlineCourse("React & Next.js", 60);
const nodeCourse = new OnlineCourse("Node.js Backend", 50);

manager.addCourse(tsCourse);
manager.addCourse(reactCourse);
manager.addCourse(nodeCourse);


console.log("\n--- Реєстрація студентів ---");
tsCourse.registerStudent("Олексій");
tsCourse.registerStudent("Дмитро");
tsCourse.registerStudent("Олексій"); // спроба зареєструвати двічі

reactCourse.registerStudent("Марія");
reactCourse.registerStudent("Олексій");


console.log("\n--- Пошук курсу ---");
const searched = manager.findCourse("TypeScript Basics");
if (searched) {
    console.log(`Знайдено курс: ${searched.courseName}, тривалість: ${searched.durationHours} год.`);
}


manager.removeCourse("Node.js Backend");

manager.printAllCourses();
