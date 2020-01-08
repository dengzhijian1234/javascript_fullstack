import { resolve } from "path"
import { rejects } from "assert"

class M {}
new M()

let p = new Promise((resolve, rejects) => {
  resolve(1)
})
p.then(r => {
  console.log(r)
})

const set = new Set([1,2])