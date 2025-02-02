"use strict";
//any
// 明确的表示类型是 any —— 【显式的any】
let d;
// 下面的赋值，均无警告
d = 100;
d = "你好";
d = false;
// 没有明确的表示类型是any，但TS主张推断出来是any —— 隐式的any
let e;
// 下面的赋值，均无警告
e = 100;
e = "你好";
e = false;
//不要轻易用any(不方便打印)
