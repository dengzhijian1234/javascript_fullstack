<template>
  <button :class="'i-button-size' + size" @click="handclick">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
function oneOf(a , err) {
  for (let i=0; i< err.length; i++) {
    if (a === err[i]) {
      return true
    }
  }
  return false
}
export default {
  props: {
    size: {
      // type: String,
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    }
  },
  data () {
    return {
      message: '子组件的内容'
    }
  },
  methods: {
    handclick () {
      // this.$emit('on-click')
      console.log('123')
    },
    sureclick () {
      // console.log('确认')
      this.$emit('sendMsg', this.message)
    }
  }
}
</script>

<style scoped>
  button{
    border: 1px solid orange;
    background-color: yellow;
    color: black;
    border-radius: 5px;
  }
  .i-button-sizelarge{
    padding: 10px 16px;
  }
  .i-button-sizedefault{
    padding: 8px 14px;
  }
  .i-button-sizesmall{
    padding: 4px 10px;
  }
</style>