// extendするときは継承する前のinterfaceに含まれてる型が、継承した後の型に代入できる限り上書きできる
interface Nameable {
  name: string;
}

interface Human extends Nameable {
  name: string;
  age: number;
  greeting(message: string): void;
}

class Developer implements Human, Nameable {
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
