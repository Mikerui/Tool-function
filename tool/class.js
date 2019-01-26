// // class 方法 系统自动转成构造函数
// class MathHandle {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   add() {
//     return this.x + this.y
//   }
// }
// const nm = new MathHandle(1, 2)
// console.log(nm.add())

// class MathHandle {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   add() {
//     return this.x + this.yu
//   }
// }
// const m = new MathHandle(1, 3)
// console.log(m.add())
// console.log(typeof MathHandle) // function 
// console.log(MathHandle.prototype.constructor === MathHandle) // true
// console.log(m.__proto__ === MathHandle.prototype) // true



class Animal {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(this.name + 'eat')
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name)
    this.name = name
  }
  say() {
    console.log(this.name + 'say')
  }
}
const dog = new Dog('哈士奇')
dog.eat()
dog.say()