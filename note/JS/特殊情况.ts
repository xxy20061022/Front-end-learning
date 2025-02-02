function demo3(): void {
    // 返回 undefined 合法
    return undefined;
  
    // 以下返回均不合法
    // return 100;
    // return false;
    // return null;
    // return [];
  }
  
  demo3();
  
  type LogFunc = () => void;

const f1: LogFunc = () => {
  return 100;  // 错误：返回的值不是 void
};

const f2: LogFunc = () => {
  return 200;  // 错误：返回的值不是 void
};

const f3: LogFunc = function () {
  return 300;  // 错误：返回的值不是 void
};

type LogFunc1 = () => void;

const f4: LogFunc1 = () => {
  return;  // 合法：返回 undefined
};

const f5: LogFunc1 = () => {
  return;  // 合法：返回 undefined
};

const f6: LogFunc1 = function () {
  return;  // 合法：返回 undefined
};

const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));
