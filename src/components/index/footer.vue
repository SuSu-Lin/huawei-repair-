<template>
    <div id="footer">
            <div class="footer-but">
                <div>
                    <img src="../../../public/index/img/2.png" class="img-yi">
                </div>
                <div>
                    <router-link :to="'/classify'">
                    <img src="../../../public/index/img/3.png" class="img-two">
                    <p>分类</p>
                    </router-link>
                </div>
                <div>
                    <router-link :to="'/find'">
                    <img src="../../../public/index/img/4.png" class="img-three">
                    <p>发现</p>
                    </router-link>
                </div>
                <div>
                    <router-link :to="'/cart'">
                    <img src="../../../public/index/img/5.png" class="img-four">
                    <p>购物车</p>
                    </router-link>
                </div>
                <div>
                    <router-link :to="'/user'">
                    <img src="../../../public/index/img/6.png" class="img-five">
                    <p>我的</p>
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'xfooter'
}
</script>

<style>

</style>
