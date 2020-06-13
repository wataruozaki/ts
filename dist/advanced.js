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
    return " ";
}
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
    }
    Dog.prototype.speak = function () {
        console.log("bow-wow");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
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
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Dog());
