<template>
  <div class="shop7">
      <hw-shop-one></hw-shop-one>
      <hw-shop-five></hw-shop-five>
  </div>
</template>

<script>

import one from './cart-zujian/cart-one'
import five from './cart-zujian/cart-five'

export default {
  name: 'xcart-shop',
  components: {
    'hw-shop-one': one,
    'hw-shop-five': five
  }
}
</script>

<style>

</style>
