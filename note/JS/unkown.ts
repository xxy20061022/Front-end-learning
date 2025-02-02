//unkonwn
// 设置变量类型为unknown
let f: unknown;
// 下面的赋值，均正常
f = 100;
f = false;
f = "你好";

// 设置变量类型为string
let x: string;
//x = f  // 错误：不能将类型“unknown”分配给类型“string”

// 设置变量类型为unknown
let g: unknown;
g = 'hello';

// 第一种方式：加类型判断
if (typeof g === 'string'){
    x = g;
    console.log(x);
}

// 第二种方式：加断言
x = g as string;

// 第三种方式：加类型断言
x = <string>g;

// 读取类型的任何属性都不会报错，而 unknown 正好与之相反。

let str3: string;
str3 = 'hello';  // 无警告
str3.toUpperCase();  // 无警告

let str4: any;
str4 = 'hello';  // 无警告
str4.toUpperCase();  // 无警告

let str5: unknown;
str5 = 'hello';  // 无警告
//str5.toUpperCase();  // 错误：“str3”的类型是“未知”