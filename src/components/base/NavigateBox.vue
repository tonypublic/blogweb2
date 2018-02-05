<template>
  <div class="box">
    <v-layout class="content" row align-center justify-space-between wrap>
      <div class="item">
        <img :src="img1" />
        <div class="item-arrow left">
          <i class="iconfont icon-xiangzuo"></i>
          <span>PREVIOUS ARTICLE</span>
        </div>
        <div class="item-title">{{msg}}</div>
      </div>
      <div class="item">
        <img :src="img2" />
        <div class="item-arrow right">
          <span>NEXT ARTICLE</span>
          <i class="iconfont icon-xiangyou"></i>
        </div>
        <div class="item-title">{{msg}}</div>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'NavigateBox',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      img1: require('../../assets/business.jpg'),
      img2: require('../../assets/architecture.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  margin-top: 0px;
  padding: 20px;
}
.item {
  width: 49%;
  height: 120px;
  position: relative;
  background-color: #000;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.item:hover {
  img {
    opacity: 0.6;
  }
}
.left {
  left: 0px;
}
.right {
  right: 0px;
}
.item-arrow {
  padding: 15px;
  color: white;
  position: absolute;
  top: 0px;
  font-size: 18px;
  cursor: pointer;
}
.item-title {
  padding: 15px;
  width: 100%;
  color: white;
  position: absolute;
  bottom: 0px;
  font-size: 16px;
  text-shadow: 1px 1px 0 #000;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    rgba(0, 0, 0, 0.8) 100%
  );
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .item {
    width: 100%;
  }
}
</style>
