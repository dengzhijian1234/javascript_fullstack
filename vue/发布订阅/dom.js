// 为什么要依赖收集
new Vue({
  template: 
            `<div>
              <span>{{t1}}</span>
              <span>{{t2}}</span>
            </div>`,


  data: {
    t1: 't1',
    t2: 't2',
    t3: 't3'
  }
})

this.t3 = 'lalalal'