<template>
<div class="shop-right">
    <xfl-two-three></xfl-two-three>
    <xfl-two-four></xfl-two-four>
    <xfl-two-five></xfl-two-five>
</div>

</template>

<script>
import three from './fl-three-zujian/fl-three'
import four from './fl-three-zujian/fl-four'
import five from './fl-three-zujian/fl-five'
export default {
  name: 'xfl-two',
  components: {
    'xfl-two-three': three,
    'xfl-two-four': four,
    'xfl-two-five': five
  }
}
</script>

<style>

</style>
