<template>
  <div id="footer6">
        <div class="footer-but6">
            <div>
                <router-link :to="'/'" tag="div">
                <img src="../../../public/user/img/首页.png" class="img-one6">
                <p>首页</p>
                </router-link>
            </div>
            <div>
                <router-link :to="'/classify'" tag="div">
                <img src="../../../public/user/img/3.png" class="img-two6">
                <p>分类</p>
                </router-link>
            </div>
            <div>
                <router-link :to="'/find'" tag="div">
                <img src="../../../public/user/img/4.png" class="img-three6">
                <p>发现</p>
                </router-link>
            </div>
            <div>
                <router-link :to="'/cart'" tag="div">
                <img src="../../../public/user/img/5.png" class="img-four6">
                <p>购物车</p>
                </router-link>
            </div>
            <div>
                <img src="../../../public/user/img/999.png" class="img-five66">
                <p style="color: #ca141d;">我的</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'xuser-footer'
}
</script>

<style>

</style>
