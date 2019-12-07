<template>
  <div class="c-test">age:{{app.userInfo.age}}
    <button @click="changapp">change</button>
  </div>
</template>

<script>
export default {
  inject: ['app'],
  methods: {
    changapp () {
      app.userInfo.age = 2  // 不能修改
    }
  }
}
</script>

<style>

</style>