<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <scroll class="content"
        ref = "scroll"
        :probe-type="3"
        @scroll="contentScroll"
        @pullingUp="loadMore" :pull-up-load="true">
      <home-swiper :banners="banner" @swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommend"/>
      <feature-view />
      <tab-control class="home-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
import HomeSwiper from "./childComp/HomeSwiper";
import RecommendView from "./childComp/RecommendView";
import FeatureView from "./childComp/FeatureView";

import NavBar from 'components/common/navbar/NavBar'
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMulitData, getHomeGoods } from "network/home";

import {debounce} from 'common/util'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data () {
    return {
      banner:[],
      recommend:[],
      goods: {
					'pop': {page: 0, list:[]},
					'new': {page: 0, list:[]},
					'sell': {page: 0, list:[]}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabShow: false
    }
  },
  created () {

    getHomeMulitData().then(res => {
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
    });

    this.getHomeGoodsData('pop');
    this.getHomeGoodsData('new');
    this.getHomeGoodsData('sell');
  },
  mounted() {

    const refresh = debounce(this.$refs.scroll.refresh)
    //监听图片加载完成  事件总线
    this.$bus.$on('itemImgLoad', () => {
      refresh()
      //this.$refs.scroll.refresh()
    })    
    
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    },

    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },

    contentScroll(position){
			//返回顶部是否显示
			this.isShowBackTop = (-position.y) > 500;
			this.isTabShow = (-position.y) > this.tabOffsetTop;
    },

    loadMore() {
      this.getHomeGoodsData(this.currentType);
      this.$refs.scroll.finishPullUp();
    },

    swiperImgLoad() {
      //获取tabControl组件的offsetTop
      //所有组件都有一个属性$el:用于获取组件中的元素
      console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },


    /**
     * 网络请求
     */
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then( res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px;
  padding-bottom: 49px; */
  position: relative;
  height: 100vh;
}

.home-nav {
  color: #fff;
  background-color: var(--color-tint);

  /* position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9; */
}

.home-control {
  position: sticky;
  top: 44px;
}

.content {
	overflow: hidden;
	position: absolute;
	left: 0;
	right: 0;
	top: 44px;
	bottom: 49px;
}


</style>