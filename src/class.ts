class Parson {
  constructor(public name: string, private age: number) {}
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
quill.greeting();

// コンソール
// Hello My name is Quill, 36 years old.
