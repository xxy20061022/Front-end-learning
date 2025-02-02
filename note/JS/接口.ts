// PersonInterface 接口，用于限制 Person 类的格式
interface PersonInterface {
    name: string;
    age: number;
    speak(n: number): void;
  }
  
  // 定义一个类 Person，实现 PersonInterface 接口
  class Person6 implements PersonInterface {
    constructor(
      public name: string,
      public age: number
    ) {}
  
    // 实现接口中的 speak 方法，注意：实现 speak时参数个数可以少于接口中的规定，但不能多。
    speak(n: number): void {
      for (let i = 0; i < n; i++) {
        // 打印出包含姓名和年龄的间隔语句
        console.log(`你好，我叫${this.name}，我的年龄是${this.age}`);
      }
    }
  }
  
  // 创建一个 Person 类的实例 p1，传入名字 'tom' 和年龄 18
  const p1 = new Person6('tom', 18);
  p1.speak(3);
  
  interface UserInterface {
    name: string;
    readonly gender: string; // 只读属性
    age?: number; // 可选属性
    run: (n: number) => void;
  }
  
  const z: number = 1;
  
  const user: UserInterface = {
    name: "张三",
    gender: "男",
    run(n) {
      console.log(`跑了${n}米`);
    }
  };

  interface CountInterface {
    (a: number, b: number): number;
  }
  
  const count2: CountInterface = (x, y) => {
    return x + y;
  };
  
  