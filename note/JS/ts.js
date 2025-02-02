"use strict";
let a;
let b;
let c;
a = 'hello';
b = -99;
c = true;
function count(x, y) {
    return x + y;
}
let result = count(1, 2);
console.log(result);
//TS中的数据类型
//never
//void
//tuple
//enum
//type
//interface
let str1; //TS官方推荐的写法
str1 = 'hello';
let str2;
str2 = 'hello';
str2 = new String('hello');
