"use strict";
var Parson = /** @class */ (function () {
    function Parson(name, age) {
        this.name = name;
        this.age = age;
    }
    Parson.prototype.incrementAge = function () {
        this.age += 1;
    };
    Parson.prototype.greeting = function () {
        console.log("Hello My name is " + this.name + ", " + this.age + " years old.");
    };
    return Parson;
}());
var person2;
var quill = new Parson("Quill", 35);
quill.incrementAge();
quill.greeting();
