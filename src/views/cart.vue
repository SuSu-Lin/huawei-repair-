<template>
  <div id="max2">
     <hw-cart-header></hw-cart-header>
     <hw-cart-shop></hw-cart-shop>
     <hw-cart-footer></hw-cart-footer>
  </div>
</template>

<script>
import header from '../components/cart/cart-header'
import shop from '../components/cart/cart-shop'
import footer from '../components/cart/cart-footer'
export default {
  name: 'xcart',
  components: {
    'hw-cart-header': header,
    'hw-cart-shop': shop,
    'hw-cart-footer': footer
  }
}
</script>

<style>
  @import "../../public/cart/cart.css"
</style>
