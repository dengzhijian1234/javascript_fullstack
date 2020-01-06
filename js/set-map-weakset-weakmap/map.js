// const data = {}
// const element = document.getElementById('myDiv')

// data[element] = 'wnwnwn'
// data['[object HTMLDivElement]']

const m = new Map()
const o = {p: 'hellow world'}

m.set(o, 'content') // .set() 是map的一个方法， 用来设置或修改实例当中的值
// m.has(o)
m.delete(o)
// console.log(m.get(o))
// console.log(m.has(o))

const items = new Map([
  ['name','蜗牛'],
  ['sex','boy']
])
const map = new Map()
items.forEach(([key, value]) => map.set(key, value))
// map = {
//   'name': '蜗牛',
//   'sex': 'boy'
// }
console.log(items.get('name'))

// 实际上不仅仅是数组， 只要任何具有Iterator接口，只要的每一个成员都是双元素数组的数据结构，
// 都可以作为Map的参数，所以Set，Map都可以用来生成新的Map

const set = new Set([
  ['foo', 1],
  ['bar',2]
])

const m1 = new Map(set)
console.log(m1.get('foo'))

const m2 = new Map([['baz', 3]])
console.log(m2)
const m3 = new Map(m2)
console.log(m3.get('baz'))

// const map = new Map()
// map.set(1, 'aaa').set(1, 'bbb')
// console.log(map)

// const map = new Map()
// //map.set(1, 'aaa').set(1, 'bbb')

// const k1 = ['a']
// const k2 = ['a']


// map.set(k1, 111).set(k2, 222)
// console.log(map)
// 相同的值在不同的对象的引用， Map结构中视为两个键

// let map = new Map()
// // map.set(-0, 123)


// map.set(true, 1)
// map.set('true', 2)
// // console.log(map.get(+0))
// console.log(map.get(true))