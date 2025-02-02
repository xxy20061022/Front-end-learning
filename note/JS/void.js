"use strict";
// 定义函数，返回值类型为空
function logMessage(msg) {
    console.log(msg);
    return undefined; //undefined是void认可的一种空
}
logMessage('你好');
// 备注：每个函数的返回值 return 都指定了类型，所以 logMessage 的返回值是 void
// 如果函数返回 undefined，调用该函数时仍然可以使用 void，因为 undefined 和 void 是相同的类型
// 第一种写法：没有返回值
function logMessage1(msg) {
    console.log(msg);
}
// 第二种写法：使用 return
function logMessage2(msg) {
    console.log(msg);
    return; // 也可以使用 return，默认返回 undefined
}
// 第三种写法：显式返回 undefined
function logMessage3(msg) {
    console.log(msg);
    return undefined; // 返回 undefined，符合 void 类型
}
//理解 void 与 undefined
//void 是一个广泛的概念，用来表示 “空”，而 undefined 则是这种“空”状态的具体实现之一。
//因此可以说 undefined 是 void 能接受的 “空” 状态的一种具体形式。
//换句话说，void 包含 undefined，但 void 表示的语义超出了单纯的 undefined，它是一种更宽泛的定义，而不仅仅是特定值的限制。
// 总结： 若函数返回类型为 void，那么：
//从语法上讲：函数返回可以是 undefined 的，甚至隐式返回 undefined，这是合法的！
//从语义上讲：函数调用者不关心函数返回的值，也不应该依赖该函数返回值做任何操作！即使返回了 undefined 值。
//void有返回值undefined没有返回值
