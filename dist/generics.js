"use strict";
// ジェネリクスとは - 型を引数で受け取る仕組み
function copy(value) {
    return value;
}
// console.log(copy<string>("hello"));
console.log(copy({ name: "Quill" }));
// 関数にジェネリクスをしているので、型推論してくれる
