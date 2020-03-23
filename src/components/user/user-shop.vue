<template>
    <div id="shop6">
        <hw-user-one></hw-user-one>
        <hw-user-two></hw-user-two>
        <hw-user-three></hw-user-three>
        <hw-user-four></hw-user-four>
        <hw-user-five></hw-user-five>
        <hw-user-six></hw-user-six>
        <hw-user-seven></hw-user-seven>
        <hw-user-eight></hw-user-eight>
        <hw-user-nine></hw-user-nine>
    </div>
</template>

<script>
import one from './user-zujian/user-one'
import two from './user-zujian/user-two'
import three from './user-zujian/user-three'
import four from './user-zujian/user-four'
import five from './user-zujian/user-five'
import six from './user-zujian/user-six'
import seven from './user-zujian/user-seven'
import eight from './user-zujian/user-eight'
import nine from './user-zujian/user-nine'
export default {
  name: 'xuser-shop',
  components: {
    'hw-user-one': one,
    'hw-user-two': two,
    'hw-user-three': three,
    'hw-user-four': four,
    'hw-user-five': five,
    'hw-user-six': six,
    'hw-user-seven': seven,
    'hw-user-eight': eight,
    'hw-user-nine': nine
  }
}
</script>

<style>

</style>
