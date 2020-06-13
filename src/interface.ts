interface Human {
  name: string;
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

// 構造的部分型とは
// インターフェイスで宣言した物が含まれていれば、コンストラクターの内容が増えてもオッケー
// 一度変数を挟まないとエラーになる