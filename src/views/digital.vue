<template>
  <div class="digital-max">
    <digital-shop></digital-shop>
    <digital-footer></digital-footer>
  </div>
</template>

<script>

import shop from '../components/digital/digitai-shop'
import footer from '../components/digital/digital-footer'

export default {
  name: 'xdigital',
  components: {
    'digital-shop':shop,
    'digital-footer':footer
  }
}
</script>

<style>
  @import'../../public/digital/digital.css'
</style>
