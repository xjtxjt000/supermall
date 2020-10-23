<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :rescommends="rescommends"></home-recommend-view>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from "./childConmps/HomeSwiper";
  import HomeRecommendView from "./childConmps/HomeRecommendView";

  import {getHomeMultidata} from 'network/home'

  export default {
  name: "Home",
    components: {
      HomeSwiper,
      NavBar,
      HomeRecommendView
    },
    data() {
      return {
        // result: null
        banners: [],
        rescommends: [],
      }
    },
    created() {
      // 1. 请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        // this.result = res;
        // this.banners = res.data().banners;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
