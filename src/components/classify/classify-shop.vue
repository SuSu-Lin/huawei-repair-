<template>
  <div class="content">
      <hw-fl-zujian-fl-one></hw-fl-zujian-fl-one>
      <hw-fl-zujian-fl-two></hw-fl-zujian-fl-two>
  </div>
</template>

<script>
import one from './fl-zujian/fl-one'
import two from './fl-zujian/fl-two'
export default {
  name: 'xclassify-shop',
  components: {
    'hw-fl-zujian-fl-one': one,
    'hw-fl-zujian-fl-two': two
  }
}
</script>

<style>

</style>
