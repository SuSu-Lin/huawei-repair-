<template>
  <div id="max">
    <hw-find-header></hw-find-header>
    <hw-find-shop></hw-find-shop>
    <hw-find-footer></hw-find-footer>
  </div>
</template>

<script>
import header from '../components/find/find-header'
import shop from '../components/find/find-shop'
import footer from '../components/find/find-footer'
export default {
  name: 'xfind',
  components: {
    'hw-find-header': header,
    'hw-find-shop': shop,
    'hw-find-footer': footer
  }
}
</script>

<style>
  @import "../../public/find/find.css"
</style>
