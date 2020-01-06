const isLoading: boolean = false
const decLiteral: number = 6
const hexLiteral: number = 0xf00d

const book: string = '深入浅出 TypeScript'

// void空类型
function user(): void {
  console.log('wn')
}

const a: void = undefined
// const b: void = null
let u: undefined = undefined
let n: null = null

const sym1 = Symbol('key1')
const sym2 = Symbol('key2')
// sym1 === sym2 false
// const max = Number.MAX_SAFE_INTEGER
// const max1 = max + 1
// const max2 = max + 2
// max1 === max2 //true
// 大数整型
// const max = BigInt(Number.MAX_SAFE_INTEGER)

// const max1 = max + 1
// const max2 = max + 2
// max1 === max2
