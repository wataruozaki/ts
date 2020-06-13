// インターフェイス
interface Human {
  name: string;
  age: number;
}

const human: Human = {
  name: "Quill",
  age: 38,
};
let developer: Human;

// タイプエイリアス
type Animal = {
  name: string;
  age: number;
};

const animal: Animal = {
  name: "Quill",
  age: 14,
};
let dog: Animal;
