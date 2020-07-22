<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.image" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  padding: 15px 0 15px;
  border-bottom: 8px solid #eee;
}

.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}

.recommend-item img{
  width: 90%;
  margin-bottom: 10px;
}
</style>