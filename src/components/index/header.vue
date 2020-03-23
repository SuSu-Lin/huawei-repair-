<template>
  <div id="header">
            <div class="top">
                <a><img src="https://res.vmallres.com/nwap/20190915/images/echannelWap/logo/logo_vmall.png" alt=""></a>
                <input type="text" placeholder="Mate 30">
                <div class="top-right">
                    <img src="../../../public/index/img/1.png" alt="">
                    <span>登录</span>
                </div>
            </div>
            <div class="zero">
                <div class="zero-a">
                    <a href="ticketDetail.html">
                        <p class="name" style="color: red; font-weight: 800;">推荐</p>
                    </a>
                    <router-link :to="'/huawei'">
                        <p class="name">华为</p>
                    </router-link>
                    <router-link :to="'/honour'">
                        <p class="name">荣耀</p>
                    </router-link>
                    <router-link :to="'/digital'">
                        <p class="name">数码惠</p>
                    </router-link>
                    <a href="ticketDetail.html">
                        <p class="name">11.11狂欢节</p>
                    </a>
                    <a href="ticketDetail.html">
                        <p class="name">拼团</p>
                    </a>
                    <a href="ticketDetail.html">
                        <p class="name">Mate E30系列</p>
                    </a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'xheader'
}
</script>

<style>

</style>
