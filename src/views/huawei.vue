<template>
  <div id="hw-max">
    <hw-hw-shop></hw-hw-shop>
    <hw-hw-footer></hw-hw-footer>
  </div>
</template>

<script>

import shop from '../components/huawei/huawei-shop'
import footer from '../components/huawei/huawei-footer'

export default {
  name: 'xhuawei',
  components: {
    'hw-hw-shop':shop,
    'hw-hw-footer':footer
  }
}
</script>

<style>
  @import'../../public/huawei/huawei.css'
</style>
