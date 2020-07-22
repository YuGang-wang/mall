<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'> 
        <template v-slot:item-icon> 
          <img src="~assets/img/home/home.png" alt="">
        </template>  
        <template v-slot:item-icon-active> 
          <img src="~assets/img/home/home-active.png" alt="">
        </template> 
        <template v-slot:item-text>首页</template>        
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <template v-slot:item-icon> 
          <img src="~assets/img/category/category.png" alt="">
        </template>
        <template v-slot:item-icon-active> 
          <img src="~assets/img/category/category-active.png" alt="">
        </template> 
        <template v-slot:item-text>分类</template>
      </tab-bar-item>
      <tab-bar-item path='/shopcart'>
        <template v-slot:item-icon>
          <img src="~assets/img/shopcart/shopcart.png" alt="">
        </template>
        <template v-slot:item-icon-active> 
          <img src="~assets/img/shopcart/shopcart-active.png" alt="">
        </template> 
        <template v-slot:item-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <template v-slot:item-icon> 
          <img src="~assets/img/profile/profile.png" alt="">
        </template>
        <template v-slot:item-icon-active> 
          <img src="~assets/img/profile/profile-active.png" alt="">
        </template> 
        <template v-slot:item-text>我的</template>        
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// import TabBar from '../../common/tabbar/TabBar'
// import TabBarItem from "../../common/tabbar/TabBarItem";
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>