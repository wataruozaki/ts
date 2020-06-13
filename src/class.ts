class Parson {
  name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
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
quill.greeting();
