// クラスとインターフェイスを同時に使う
// インターフェイスの内容をクラスに対して指定したい時
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
    console.log("Hello!");
  }
}
