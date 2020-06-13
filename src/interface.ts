interface Human {
  readonly name: string;
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(
    public name: string,
    public age: number,
    public experience: number
  ) {}
  greeting(message: string) {
    console.log(message);
  }
}
const tmpDeveloper = {
  name: "Quill",
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  },
};
const user: Human = tmpDeveloper;
let developer = new Developer("Quill", 34, 3);
developer.name = "hello";
// クラスを経由してるため、エラーにならない
// implementsの中のreadonlyはクラスの中には影響しない
