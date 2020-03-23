<template>
  <div id="max">
    <hw-user-header></hw-user-header>
    <hw-user-shop></hw-user-shop>
    <hw-user-footer></hw-user-footer>
  </div>
</template>

<script>

import header from '../components/user/user-header'
import shop from '../components/user/user-shop'
import footer from '../components/user/user-footer'

export default {
  name:'xuser',
  components: {
    'hw-user-header': header,
    'hw-user-shop': shop,
    'hw-user-footer': footer
  }
}
</script>

<style>
  @import "../../public/user/user.css"
</style>
