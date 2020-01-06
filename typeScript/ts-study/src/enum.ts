// enum Direction {
//   Up = 'Up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }
// console.log(Direction.Down)

// 异构枚举
enum yg {
  No = 0,
  Yes = 'Yes'
}

// 反向映射  key<=>value
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

var obj = {
  name: 'wn'
}


// 联合枚举
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// declare let aaa: Direction
// // const aaa: number = 0
// // console.log(aaa === Direction['Up'])
// // type c = 0
// // declare let bbb: c
// // // bbb = 1
// // // console.log(bbb === Direction['Up'])

// enum Animal {
//   Dog,
//   Cat
// }
// aaa = Direction.Up // ok
// // aaa = Animal.Dog // no 

enum Direction {
  Up,
  Down,
  Left,
  Right
}
enum Direction {
  Center = 1
}
