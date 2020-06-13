class Person {
  static spacies = "homosapies";
  static isAoult(age: number) {
    if (age > 17) return true;
    return false;
  }
  constructor(public name: string, protected age: number) {}
  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello My name is ${this.name}, ${this.age} years old.`);
  }
}

class Teacher extends Person {
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

console.log(Person.spacies);
console.log(Person.isAoult(38));
console.log(Teacher.spacies);
console.log(Teacher.isAoult(38));
// コンソール

// homosapies;
// true;
// homosapies;
// true;
