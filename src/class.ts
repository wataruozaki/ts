class Parson {
  constructor(public name: string, protected age: number) {}
  incrementAge() {
    this.age += 1;
  }

  greeting(this: Parson) {
    console.log(`Hello My name is ${this.name}, ${this.age} years old.`);
  }
}

class Teacher extends Parson {
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
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  greeting(this: Teacher) {
    console.log(`Hello My name is ${this.name}, ${this.age} years old.`);
  }
}
const teacher = new Teacher("Qiill", 38, "math");
teacher.subject = "Music";
console.log(teacher.subject);
teacher.greeting();

// コンソール
