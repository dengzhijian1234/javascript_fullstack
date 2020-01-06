global.gc()
console.log(process.memoryUsage())

// 引用计数
let array = new Array(4 * 1024) // [] // +1
let map = new Map()
map.set(array, 4) // +1
// array = null // -1 计数为0 回收
global.gc() // 
console.log(process.memoryUsage())