<template>
  <div class="one">
      <a href="http://www.baidu.com" target="_blank">苏幕遮</a>
      <h2>鹧鸪天</h2>
    <img src="../assets/images/56571147.jpeg" class="img1">
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '哈哈哈哈哈哈'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.one{
  width: 500px;
  height: 500px;
  background-color: aqua;
  margin: 0 auto;
}
.img1{
  width: 250px;
  height: 250px;
  padding-top: 10px;
}
</style>
