<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="" class="goods-img" :key="goodsItem.show.img" @load="imgLoad">
    <div class="goods-info">
      <div class="goods-title">{{goodsItem.title}}</div>
      <div class="goods-list-price">
				<div class="price">{{goodsItem.price}}</div>
				<span class="collect">{{goodsItem.cfav}}</span>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
				type: Object,
				default() {
					return {}
				}
			}
  },
  created () {    
  },  
	computed: {
		showImg(){
			return this.goodsItem.image || this.goodsItem.show.img;
		}
  },
  methods: {
    imgLoad() {
      // 利用事件总线发射事件，令外部对事件进行监听
      this.$bus.$emit("itemImgLoad")
    }
  }
}
</script>

<style scoped>

.goods-list-item {
  width: 48%;
  padding-top: 6px;
	font-size: 14px;  
}
.goods-img {
  width: 100%;
	height: auto;
	border-radius: 4px;
}
.goods-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-list-price {
  display: flex;
}
.price {
  color: var(--color-high-text);
  margin-right: 30px;
}
.collect {
  position: relative;
}
.collect::before {
	content: '';
  position: absolute;
  left: -15px;
  top: 1px;
	width: 14px;
	height: 14px;
	background: url(~assets/img/home/collect_icon.png) 0 0/14px 14px;
}
</style>