<template>
  <div class="b-test">
    Bbbbbbb{{name}}
     bbb
    <div>
      <testc></testc>
    </div>
  </div>
</template>

<script>
import c from './c'
export default {
  inject: ['name'],
  components: {
    'testc': c
  },
  mounted () {
    console.log(this.name)
  }
}
</script>

<style>

</style>