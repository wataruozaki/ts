"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}, ${this.age} years old.`);
        this.explainJob();
    }
}
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I teach ${this.subject} . `);
    }
    get subject() {
        if (!this._subject) {
            throw new Error("there is no subject.");
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error("there is no subject.");
        }
        this._subject = value;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("Quill", 38, "Math");
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
