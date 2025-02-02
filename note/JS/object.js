"use strict";
let k; // k的值可以是任意（非原始类型）的值，包含：对象、函数、数组等
// 以下代码是合法的，因为将“非原始类型”赋给 k，所以都会符合要求
k = { name: '张三' };
k = [1, 3, 5, 7, 9];
k = function () { };
k = new String('123');
class Person1 {
}
k = new Person1();
// 以下代码是非法的，赋给 k 有警告
//k = 1;       // 错误：不能将类型“number”赋给类型“object”
//k = true;    // 错误：不能将类型“boolean”赋给类型“object”
//k  = "你好";   // 错误：不能将类型“string”赋给类型“object”
//k= null;    // 错误：不能将类型“null”赋给类型“object”
//k  = undefined; // 错误：不能将类型“undefined”赋给类型“object”
let l; // k的值可以是任意（非原始类型）的值，包含：对象、函数、数组等
l = { name: '张三' };
l = [1, 3, 5, 7, 9];
l = function () { };
l = new String('123');
class Person2 {
}
l = new Person2();
l = 1;
l = true;
l = "你好";
// 使用 person1 声明对象，并给定 name 和 age 的类型
let person1;
// 使用 person2 声明对象，并给定 name 和 age 的类型
let person2;
// 赋值给 person1 和 person2，符合要求
person1 = { name: '张三', age: 18 };
person2 = { name: '王五', age: 29 };
// 错误的赋值，因为 person3 没有声明类型，且多了 gender 属性
let person3 = { name: '王五', age: 29, gender: '男' };
// 通过类型声明，正确地给 person3 声明类型
let person4;
person4 = { name: '王五', age: 29, gender: '男' };
// 限制 person 对象必须有 name 属性，且选定 age 属性值必须是数字，同时可以有任意数量、任意类型的属性
let person;
// 赋值合法
person = {
    name: "张三",
    age: 18,
    gender: "男"
};
let count1;
count1 = function (x, y) {
    return x + y;
};
let arr1;
let arr2;
arr1 = ['a', 'b'];
arr2 = [100, 200];
console.log(arr1);
console.log(arr2);
