// // 抽象类

// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log('roaming this earch...')
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log('miaomiao')
//   }
// }
// const cat = new Cat()
// cat.makeSound()

//访问限定符
class Cat {
  public run() {
    console.log('跑起来...')
  }
  private eat() {//私有属性
    console.log('吃起来。。。')
  }
  protected sleep() {
    console.log('睡觉吧。。。')
  }
}
class GTR extends Cat{
  init() {
    this.run()
  }
}
const cat = new Cat()
cat.run()
// cat.eat()  只能在类当中调用
// cat.sleep() 子类可以用

// const car = new Cat()
// car.run()
// const car = new GTR
// car.init()
const gtr = new GTR()
// gtr.sleep()  不可以 子类的实例  sleep只可以在子类调用

// class 可以作为接口
// export default class Props {
//   public children: Array<React.ReactElement<any>>
// }

// public static defaultProps = new Props()
// props: Props
