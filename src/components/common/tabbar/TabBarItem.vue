<template>
  <div class="tab-bat-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name='item-icon'></slot> 
    </div>
    <div v-else>
      <slot name='item-icon-active'>
      </slot> 
    </div>    
    <div :style="activeStyle">
      <slot name='item-text'></slot>   
    </div>         
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path:{
      type: String,
      required: true
    },
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive() {
      //判断路由是否活跃
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      //动态绑定style
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      //动态路由
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
 .tab-bat-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bat-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

  .active {
    color:  red;
  }

</style>

