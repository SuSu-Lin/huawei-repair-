<template>
  <div id="footer7">
        <div class="footer-but7">
            <div>
                <router-link :to="'/'" tag="div">
                <img src="../../../public/user/img/首页.png" class="img-one7">
                <p>首页</p>
                </router-link>
            </div>
            <div>
                <router-link :to="'/classify'" tag="div">
                <img src="../../../public/user/img/3.png" class="img-two7">
                <p>分类</p>
                </router-link>
            </div>
            <div>
                <router-link :to="'/find'" tag="div">
                <img src="../../../public/user/img/4.png" class="img-three7">
                <p>发现</p>
                </router-link>
            </div>
            <div>
                
                <img src="../../../public/user/img/147.png" class="img-four7">
                <p>购物车</p>
               
            </div>
            <div>
                <router-link :to="'/user'" tag="div">
                <img src="../../../public/user/img/6.png" class="img-five7">
                <p>我的</p>
                 </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'xcart-footer'
}
</script>

<style>

</style>
