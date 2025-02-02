class Person7 {
    name: string;  // 姓名
    age: number;   // 年龄
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    //简写版
    //class Person {
    //constructor(public name: string, public age: number) {}
    speak() {
      console.log(`我叫：${this.name}，今年${this.age}岁`);
    }
  }
  
  class Student extends Person {
    grade: string;
  
    constructor(name: string, age: number, grade: string) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name}正在努力学习中......`);
    }
    speak() {
        console.log(`我是学生,我叫：${this.name}，今年${this.age}岁`);
      }
  }
  
  const s1 = new Student('李同学', 16, '高三');
  console.log(s1);
  s1.study();
  s1.speak();
  
