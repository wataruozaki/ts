abstract class Person {
  constructor(public name: string, protected age: number) {}
  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello My name is ${this.name}, ${this.age} years old.`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Teacher extends Person {
  private static instance: Teacher;
  explainJob() {
    console.log(`I teach ${this.subject} . `);
  }
  get subject() {
    if (!this._subject) {
      throw new Error("there is no subject.");
    }
    return this._subject;
  }

  set subject(value) {
    if (!value) {
      throw new Error("there is no subject.");
    }
    this._subject = value;
  }
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("Quill", 38, "Math");
    return Teacher.instance;
  }
}

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
