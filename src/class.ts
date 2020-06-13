class Parson {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: { name: string }) {
    console.log(`Hello My name is ${this.name}`);
  }
}

const quill = new Parson("Quill");
quill.greeting();
const anotherQuill = {
  name: "anotherQuill",
  anotherGreeting: quill.greeting,
};
anotherQuill.anotherGreeting();

//メソッド追加
