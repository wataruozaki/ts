"use strict";
var _a, _b, _c;
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
var upperHello = function (x) {
    return 0;
};
var intersectionFunc;
intersectionFunc = function (a, b) {
    return 0;
};
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
document.getElementById("input").value =
    "initial input value";
var designer = {
    name: "Quill",
    role: "web",
};
var downloadedData = {
    id: 1,
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
var userdata = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : "no-user";
