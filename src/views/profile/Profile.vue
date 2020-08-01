<template>
  <div class="wrapper" ref="wrapper">
    <ul >
      <button @click="btnClick">dianji</button>
      <li>1分类</li>
      <li>2分类</li>
      <li>3分类</li>
      <li>4分类</li>
      <li>5分类</li>
      <li>6分类</li>
      <li>7分类</li>
      <li>8分类</li>
      <li>9分类</li>
      <li>10分类</li>
      <li>11分类</li>
      <li>12分类</li>
      <li>13分类</li>
      <li>14分类</li>
      <li>15分类</li>
      <li>16分类</li>
      <li>17分类</li>
      <li>18分类</li>
      <li>19分类</li>
      <li>20分类</li>
      <li>21分类</li>
      <li>22分类</li>
      <li>23分类</li>
      <li>24分类</li>
      <li>25分类</li>
      <li>26分类</li>
      <li>27分类</li>
      <li>28分类</li>
      <li>29分类</li>
      <li>30分类</li>
      <li>31分类</li>
      <li>32分类</li>
      <li>33分类</li>
      <li>34分类</li>
      <li>35分类</li>
      <li>36分类</li>
      <li>37分类</li>
      <li>38分类</li>
      <li>39分类</li>
      <li>40分类</li>
      <li>41分类</li>
      <li>42分类</li>
      <li>43分类</li>
      <li>44分类</li>
      <li>45分类</li>
      <li>46分类</li>
      <li>47分类</li>
      <li>48分类</li>
      <li>49分类</li>
      <li>50分类</li>
      <li>51分类</li>
      <li>52分类</li>
      <li>53分类</li>
      <li>54分类</li>
      <li>55分类</li>
      <li>56分类</li>
      <li>57分类</li>
      <li>58分类</li>
      <li>59分类</li>
      <li>60分类</li>      
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Profile',
  components: {
    
  },
  mounted () {
    // let wrapper = document.querySelector('.wrapper')
    // let scroll = new BScroll(wrapper)    
    
    let scroll = new BScroll(this.$refs.wrapper,{
      probeType: 3,
      pullUpLoad: true
    });
    scroll.on('scroll',(position) => {
      //console.log(position)
    });
    scroll.on('pullingUp', () => {
      console.log('上拉加载更多')

      setTimeout(() => {
        scroll.finishPullUp();
      }, 2000)
    })

    console.log(scroll)
  },
  methods:{
    btnClick(){
      console.log("点击")
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: red;

  overflow: hidden;
}
</style>