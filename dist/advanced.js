"use strict";
var quill = {
    name: "Quill",
    role: "front-end",
    follower: 1000,
};
function toUpperCase(x) {
    if (typeof x === "string") {
        x.toUpperCase();
    }
    return x;
}
var upperHello = toUpperCase("hello");
function discribeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
        this.kind = "dog";
    }
    Dog.prototype.speak = function () {
        console.log("bow-wow");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = "bird";
    }
    Bird.prototype.speak = function () {
        console.log("tweet-tweet");
    };
    Bird.prototype.fly = function () {
        console.log("flutter");
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case "bird":
            pet.fly();
            break;
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
// const input = <HTMLInputElement>document.getElementById("input");
// const input = document.getElementById("input") as HTMLInputElement;// React の場合はこっち
// input.value = "initial input value";
document.getElementById("input").value =
    "initial input value";
var designer = {
    name: "Quill",
    role: "web",
};
console.log(designer.hogehogehoge); //値はないがタイプスクリプト上ではOKになってしまう
