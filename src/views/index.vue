<template>
<div id="max">
  <hw-index-header></hw-index-header>
  <hw-index-shop></hw-index-shop>
  <hw-index-footer></hw-index-footer>
</div>

</template>

<script>
import header from '../components/index/header'
import footer from '../components/index/footer'
import shop from '../components/index/shop'
export default {
  name: 'xindex',
  components: {
    'hw-index-header': header,
    'hw-index-footer': footer,
    'hw-index-shop': shop
  }
}
</script>

<style>
  @import "../../public/index/index.css";
</style>
