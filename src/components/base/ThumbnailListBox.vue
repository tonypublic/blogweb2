<template>
  <div class="box">
    <div class="siderbox-head head-txt">
      <span>
        <i class="iconfont icon-time"></i>
      </span>
      <span>WEEK TRENDING</span>
    </div>
    <div class="item-list">
      <v-layout class="item" row justify-space-between>
        <div class="item-thumbnail">
          <img :src="img" />
        </div>
        <div class="item-content">
          <div class="item-title">{{msg}}</div>
          <div class="item-post">
            <span>
              <i class="iconfont icon-time"></i>
              <span>Jun 18, 2018</span>
            </span>
          </div>
        </div>
      </v-layout>
      <v-divider></v-divider>
      <v-layout class="item" row justify-space-between>
        <div class="item-thumbnail">
          <img :src="img" />
        </div>
        <div class="item-content">
          <div class="item-title">{{msg}}</div>
          <div class="item-post">
            <span>
              <i class="iconfont icon-time"></i>
              <span>Jun 18, 2018</span>
            </span>
          </div>
        </div>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App. ',
      img: require('../../assets/science.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.head-txt {
  font-size: 16px;
  i {
    font-weight: 600;
    color: red
  }
}
.item-list {
  padding: 20px;
}
.item:hover {
  .item-thumbnail img{
    opacity: 0.6;
  }
}
.item-thumbnail {
  width: 25%;
  background-color: black;
  height: 60px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.item-content {
  width: 70%;
}
.item-post {
  color: grey;
  font-style: italic;
  text-align: right;
  i {
    font-size: 14px;
  }
}
.divider {
  margin: 15px 0px;
}
</style>
