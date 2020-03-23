<template>
  <div id="classify-footer">
        <div class="footer-but">
            <div>
                <router-link :to="'/'">
                <img src="../../../public/classify/img/首页.png" class="img-oone">
                <p>首页</p>
                </router-link>
            </div>
            <div>
                <img src="../../../public/classify/img/82.png" class="img-two">
                <p>分类</p>
            </div>
            <div>
                 <router-link :to="'/find'">
                <img src="../../../public/classify/img/4.png" class="img-three">
                <p>发现</p>
                </router-link>
            </div>
            <div>
                 <router-link :to="'/cart'">
                <img src="../../../public/classify/img/5.png" class="img-four">
                <p>购物车</p>
                </router-link>
            </div>
            <div>
                 <router-link :to="'/user'">
                <img src="../../../public/classify/img/6.png" class="img-five">
                <p>我的</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'xclassify-footer'
}
</script>

<style>

</style>
