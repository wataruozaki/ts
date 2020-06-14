"use strict";
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: "Quill", age: 38 }, "name"));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
// ここでstringsと決めたらstring
stringLightDatabase.add("apple");
stringLightDatabase.add("banana");
stringLightDatabase.add("grape");
stringLightDatabase.remove("banana");
console.log(stringLightDatabase.get());
// {
//     readonly title: string;
//     readonly text: string;
// } readonlyを返す
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello");
    }, 3000);
});
fetchData.then((data) => {
    data.toUpperCase();
});
// Promiseはunknownを返すがジェネリクスを使い、型の指定をできる
const vagetables = ["tomato", "Broccoli", "asparagus"];
// これで配列で文字列を指定できる
