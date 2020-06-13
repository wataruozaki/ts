class Parson {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: Parson) {
    console.log(`Hello My name is ${this.name}`);
  }
}

let person2: Parson;
const quill = new Parson("Quill");
quill.greeting();
const anotherQuill = {
  name: "anotherQuill",
  greeting: quill.greeting,
};

anotherQuill.greeting();
