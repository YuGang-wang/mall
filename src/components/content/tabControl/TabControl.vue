<template>
  <div class="tab-control">
    <div class="tab-control-item"
      v-for="(item,index) in titles"
      :class="{active: index === currentIndex}"
			@click="tabItemClick(index)"
      :key="item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles: {
		  type: Array,
		  default() {
		  	return []
      }
    }
  },
  data() {
    return{
      currentIndex: 0
    }
  },
	methods: {
		tabItemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
		}
	}
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
	line-height: 40px;
	font-size: 15px;
	text-align: center;
	background-color: #fff;
}
 .tab-control-item {
  flex: 1;
 }

.active {
   color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
  padding: 5px;
}
</style>