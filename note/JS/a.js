// 原始类型字符串
let str = 'hello';

// 当访问str.length时，JavaScript引擎做了以下工作：
let size = (function() {
    // 1. 自动装箱：创建一个临时的String对象包装原始字符串
    let tempStringObject = new String(str);

    // 2. 访问String对象的length属性
    let lengthValue = tempStringObject.length;

    // 3. 销毁临时对象，返回长度值
    // （JavaScript引擎自动处理对象销毁，开发者无感知）
    return lengthValue;
})();

console.log(size); // 输出：5
