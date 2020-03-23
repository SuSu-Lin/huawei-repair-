<template>
  <div class="honour-max">
    <hw-honour-shop></hw-honour-shop>
    <hw-honour-footer></hw-honour-footer>
  </div>
</template>

<script>
import shop from '../components/honour/honour-shop'
import footer from '../components/honour/honour-footer'
export default {
  name: 'xhonour',
  components: {
    'hw-honour-shop':shop,
    'hw-honour-footer':footer
  }
}
</script>

<style>
  @import'../../public/honour/honour.css'
</style>
