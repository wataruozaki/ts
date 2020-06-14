"use strict";
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: "Quill", age: 38 }, "name"));
var LightDatabase = /** @class */ (function () {
    function LightDatabase() {
        this.data = [];
    }
    LightDatabase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDatabase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDatabase.prototype.get = function () {
        return this.data;
    };
    return LightDatabase;
}());
var stringLightDatabase = new LightDatabase();
// ここでstringsと決めたらstring
stringLightDatabase.add("apple");
stringLightDatabase.add("banana");
stringLightDatabase.add("grape");
stringLightDatabase.remove("banana");
console.log(stringLightDatabase.get());
// コンソール
// ['apple', 'grape']
