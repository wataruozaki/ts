// type addFunc = (num1: number, num2: number) => number;
interface addfunc {
  (num1: number, num2: number): number;
}

let addfunc: addFunc;
addfunc = (n1: number, n2: number) => {
  return n1 + n2;
};
type Nameable = {
  name: string;
};

interface Human extends Nameable {
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
