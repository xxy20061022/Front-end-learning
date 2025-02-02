"use strict";
class Person7 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //简写版
    //class Person {
    //constructor(public name: string, public age: number) {}
    speak() {
        console.log(`我叫：${this.name}，今年${this.age}岁`);
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        console.log(`${this.name}正在努力学习中......`);
    }
    speak() {
        console.log(`我是学生,我叫：${this.name}，今年${this.age}岁`);
    }
}
const s1 = new Student('李同学', 16, '高三');
console.log(s1);
s1.study();
s1.speak();
