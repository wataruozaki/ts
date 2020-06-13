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
var person2;
var quill = new Parson("Quill");
quill.greeting();
var anotherQuill = {
    name: "anotherQuill",
    greeting: quill.greeting,
};
anotherQuill.greeting();
