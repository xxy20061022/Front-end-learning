"use strict";
function demo3() {
    // 返回 undefined 合法
    return undefined;
    // 以下返回均不合法
    // return 100;
    // return false;
    // return null;
    // return [];
}
demo3();
const f1 = () => {
    return 100; // 错误：返回的值不是 void
};
const f2 = () => {
    return 200; // 错误：返回的值不是 void
};
const f3 = function () {
    return 300; // 错误：返回的值不是 void
};
const f4 = () => {
    return; // 合法：返回 undefined
};
const f5 = () => {
    return; // 合法：返回 undefined
};
const f6 = function () {
    return; // 合法：返回 undefined
};
const src = [1, 2, 3];
const dst = [0];
src.forEach((el) => dst.push(el));
