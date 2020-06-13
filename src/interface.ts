interface addFunc {
  (num1: number, num2: number): number;
}

let addfunc: addFunc;
addfunc = (n1: number, n2: number) => {
  return n1 + n2;
};
interface Nameable {
  name?: string;
  nicName?: string;
}
const nameable: Nameable = {
  name: "Quill",
  nicName: "Q",
};

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(
    public age: number,
    public experience: number,
    public name?: string //一番最後につける
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
const user: Human = new Developer(38, 3);
if (user.name) {
  user.name.toUpperCase();
}
console.log(user.name);

// ?をプロパティやパラメーターにつけると合ってもなくても良いものになる。
