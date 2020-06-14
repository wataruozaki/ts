function copy<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key];
  return value;
}
console.log(copy({ name: "Quill", age: 38 }, "name"));

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
// ここでstringsと決めたらstring
stringLightDatabase.add("apple");
stringLightDatabase.add("banana");
stringLightDatabase.add("grape");
stringLightDatabase.remove("banana");

console.log(stringLightDatabase.get());

// Utillity型　-  typescriptに内蔵されてるライブラリ的な
interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>;
// {
//   title ?: string | undefined;
//   text ?: string | undefined;
// } オプショナルプロパティで返す
type ReadTodo = Readonly<Todo>;
// {
//     readonly title: string;
//     readonly text: string;
// } readonlyを返す

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});
fetchData.then((data) => {
  data.toUpperCase();
});
// Promiseはunknownを返すがジェネリクスを使い、型の指定をできる

const vagetables: Array<string> = ["tomato", "Broccoli", "asparagus"];
// これで配列で文字列を指定できる

// 型をパラメーターとして指定できる
interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;

// Mapped
interface Vegetables {
  readonly tomato: string;
  pumpkin: string;
}
let tmp3: keyof Vegetables;
type MappedTypes = {
  -readonly [P in keyof Vegetables]?: string;
};

type ConditionalTypes = "tomato" extends string ? number : boolean;
// tomatoにstringを入れられればnumber型になるそうでなければboolean

type ConditionlTypeInfer = { tomato: string } extends { tomato: infer R }
  ? R
  : boolean;
// type ConditionlTypeInfer = string

type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let tmp4: DistributiveConditionalTypes<"tomato" | "pumpkin">;
