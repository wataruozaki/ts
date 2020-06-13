class Parson {
  readonly id: number = 32;
  constructor(public readonly name: string, private age: number) {
    this.id = 31;
    this.name = "hello";
    this.id = 30;
  }
  incrementAge() {
    this.age += 1;
  }

  greeting(this: Parson) {
    console.log(`Hello My name is ${this.name}, ${this.age} years old.`);
  }
}

let person2: Parson;
const quill = new Parson("Quill", 35);
quill.incrementAge();
console.log(quill.id);
quill.greeting();

// コンソール
// Hello My name is Quill, 36 years old.
