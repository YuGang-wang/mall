<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <home-swiper :banners="banner"/>
    <recommend-view :recommends="recommend"/>
    
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from "./childComp/HomeSwiper";
import RecommendView from "./childComp/RecommendView";

import {getHomeMulitData} from "network/home";

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data () {
    return {
      banner:[],
      recommend:[],
      result:null
    }
  },
  created () {
    
    getHomeMulitData().then(res => {
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
      this.result = res
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
}
</style>