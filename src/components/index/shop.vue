<template>
    <div id="shop">
        <shop-banner></shop-banner>
        <shop-one></shop-one>
        <shop-two></shop-two>
        <shop-three></shop-three>
        <shop-four></shop-four>
        <shop-five></shop-five>
        <shop-six></shop-six>
        <shop-seven></shop-seven>
        <shop-eight></shop-eight>
        <shop-nine></shop-nine>
    </div>
</template>

<script>
import one from './zujian/one'
import two from './zujian/two'
import three from './zujian/three'
import four from './zujian/four'
import five from './zujian/five'
import six from './zujian/six'
import seven from './zujian/seven'
import eight from './zujian/eight'
import nine from './zujian/nine'
import banner from './zujian/banner'
export default {
  name: 'xshop',
  components:{
      'shop-one':one,
      'shop-two':two,
      'shop-three':three,
      'shop-four':four,
      'shop-five':five,
      'shop-six':six,
      'shop-seven':seven,
      'shop-eight':eight,
      'shop-nine':nine,
      'shop-banner':banner
  }
}
</script>

<style>

</style>
