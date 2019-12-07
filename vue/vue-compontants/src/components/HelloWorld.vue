<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="small" @on-click="btn1">
      按钮
      <i slot="icon">**</i>
    </i-button>
    <i-button size="large" @on-click="btn2">提交</i-button>
    <div @click="orsure">
      <i-button size="default" ref="sure">确认</i-button>
    </div>
    <i-button size="default" ref="sure" @click.native="psure" @sendMsg="getMsg">确认</i-button>
    <div>{{mesg}}</div>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mesg: ''
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    btn1 () {
      console.log('hellow')
    },
    btn2 () {
      console.log('nmb')
    },
    orsure () {
      this.$refs.sure.sureclick()
    },
    psure () {
      this.$refs.sure.sureclick()
    },
    getMsg (e) {
      this.mesg = e
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
