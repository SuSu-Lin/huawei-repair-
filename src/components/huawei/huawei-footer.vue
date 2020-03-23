<template>
  <div id="footer-honour">
        <div class="footer-honour-but">
            <div>
                <router-link :to="'/'">
                <img src="../../../public/find/img/首页.png" class="img-honour-one">
                <p>首页</p>
                </router-link>
            </div>
            <div>
                <router-link :to="'/classify'">
                <img src="../../../public/find/img/3.png" class="img-honour-two">
                <p>分类</p>
                </router-link>
            </div>
            <div>
                <img src="../../../public/find/img/4.png" class="img-honour-three">
                <p>发现</p>
            </div>
            <div>
                <router-link :to="'/cart'">
                <img src="../../../public/find/img/5.png" class="img-honour-four">
                <p>购物车</p>
                </router-link>
            </div>
            <div>
                <router-link :to="'/user'">
                <img src="../../../public/find/img/6.png" class="img-honour-five">
                <p>我的</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'xfind-footer'
}
</script>

<style>

</style>
