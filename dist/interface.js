"use strict";
var addfunc;
addfunc = function (n1, n2) {
    return n1 + n2;
};
var nameable = {
    name: "Quill",
    nicName: "Q",
};
var Developer = /** @class */ (function () {
    function Developer(age, experience, name //一番最後につける
    ) {
        this.age = age;
        this.experience = experience;
        this.name = name;
    }
    Developer.prototype.greeting = function (message) {
        console.log(message);
    };
    return Developer;
}());
var tmpDeveloper = {
    name: "Quill",
    age: 38,
    experience: 3,
    greeting: function (message) {
        console.log(message);
    },
};
var user = new Developer(38, 3);
if (user.name) {
    user.name.toUpperCase();
}
console.log(user.name);
// ?をプロパティやパラメーターにつけると合ってもなくても良いものになる。
