<template>
<div id="max">
  <hw-classify-header></hw-classify-header>
  <hw-classify-shop></hw-classify-shop>
  <hw-classify-footer></hw-classify-footer>
</div>

</template>

<script>
import header from '../components/classify/classify-header'
import shop from '../components/classify/classify-shop'
import footer from '../components/classify/classify-footer'

export default {
  name: 'xclassify',
  components: {
    'hw-classify-header': header,
    'hw-classify-shop': shop,
    'hw-classify-footer': footer
  }
}
</script>

<style>
  @import "../../public/classify/classify.css";
</style>
