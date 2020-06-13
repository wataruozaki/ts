"use strict";
var Parson = /** @class */ (function () {
    function Parson(initName) {
        this.name = initName;
    }
    Parson.prototype.greeting = function () {
        console.log("Hello My name is " + this.name);
    };
    return Parson;
}());
var quill = new Parson("Quill");
quill.greeting();
var anotherQuill = {
    name: "anotherQuill",
    anotherGreeting: quill.greeting,
};
anotherQuill.anotherGreeting();
//メソッド追加
