// ジェネリクスとは - 型を引数で受け取る仕組み

function copy<T>(value: T): T {
  return value;
}
// console.log(copy<string>("hello"));
console.log(copy({ name: "Quill" }));
// 関数にジェネリクスをしているので、型推論してくれる
