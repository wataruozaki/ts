interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
  //メソッドのみこの書き方ができる。関数にはできない
}

const human: Human = {
  name: "Quill",
  age: 38,
  greeting(message: string) {
    console.log(message);
  },
};
