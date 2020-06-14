"use strict";
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: "Quill", age: 38 }, "name"));
