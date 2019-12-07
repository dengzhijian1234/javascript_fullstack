<template>
  <div class="a-test">
    Aaaaa
    <testb></testb>
  </div>
</template>

<script>
import b from './b'
export default {
  provide: {
    name: '蜗牛'
  },
  components: {
    'testb': b
  },
  data () {
    return {
      // name: 'woniu'
    }
  }
}
</script>

<style>

</style>