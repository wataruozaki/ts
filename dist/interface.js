"use strict";
let addfunc;
addfunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: "Quill",
    nicName: "Q",
};
class Developer {
    constructor(age, experience, name //一番最後につける
    ) {
        this.age = age;
        this.experience = experience;
        this.name = name;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: "Quill",
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    },
};
const user = new Developer(38, 3);
if (user.name) {
    user.name.toUpperCase();
}
console.log(user.name);
// ?をプロパティやパラメーターにつけると合ってもなくても良いものになる。
