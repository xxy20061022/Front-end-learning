"use strict";
/* 将变量声明为never，表示该值永远不会存在任何有效的值 */
let h;
// 下面的赋值操作会显示错误
//h= true;        // 错误：不能将类型 'true' 分配给类型 'never'
//h = undefined;   // 错误：不能将类型 'undefined' 分配给类型 'never'
//h = null;        // 错误：不能将类型 'null' 分配给类型 'never'
function demo() {
    throw new Error('程序运行异常！');
    //return 666;  // 这行代码永远不会执行
}
// 常规的 TypeScript 主动推断类型，例外：
let j;
j = 'hello';
if (typeof j === 'string') {
    console.log(j.toUpperCase());
}
else {
    console.log('TypeScript会推断出j为string,因此没有任何错误');
}
