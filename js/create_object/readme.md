- new 的过程
  1. 创建一个空对象 {}
  2. new functionA (){}
  函数运行时，  会产生几个必有的对象
  动态决定
  this {} <= this.name
  当 FunctionA 不是以new 的方式来运行时？ 就是一个普通函数 , this 指向 window.
  启动严格模式之后('use strict'), this undefined

  arguments 
  两口子  constructor prototype
  JS中并没有类  Person 对象(函数)
  woniu.__proto__ === Person.prototype

  this 当做为对象的方法被执行时 this 指向对象
  woniu.sing();
  new Person    this 指向实例,
  Person() 普通函数被运行时 this 指向 undefined | window 

- 面向对象的做法 ， 三种
  constructor + prototype 基于原型
  es6 class 关键字
  Object.create(原型对象)
- 手写代码是js 考试的方式
Object.create()
function create(obj) {
  function F() {} //空函数
  F.prototype = obj;
  return new f();
}
