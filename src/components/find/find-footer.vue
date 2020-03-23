<template>
  <div id="footer1">
        <div class="footer-but1">
            <div>
                <router-link :to="'/'">
                <img src="../../../public/find/img/首页.png" class="img-one1">
                <p>首页</p>
                </router-link>
            </div>
            <div>
                <router-link :to="'/classify'">
                <img src="../../../public/find/img/3.png" class="img-two1">
                <p>分类</p>
                </router-link>
            </div>
            <div>
                <img src="../../../public/find/img/136.png" class="img-three1">
                <p>发现</p>
            </div>
            <div>
                <router-link :to="'/cart'">
                <img src="../../../public/find/img/5.png" class="img-four1">
                <p>购物车</p>
                </router-link>
            </div>
            <div>
                <router-link :to="'/user'">
                <img src="../../../public/find/img/6.png" class="img-five1">
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
