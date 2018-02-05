<template>
  <div class="box">
    <div class="siderbox-head head-txt">
      <span>
        <i class="iconfont icon-socialshare"></i>
      </span>
      <span>SOCIAL COUNTERS</span>
    </div>
    <div class="list-content">
      <div class="list-item">
        <span class="icon">
          <i class="iconfont wechat-color icon-weixin"></i>
        </span>
        <span class="count">888</span>
        <span class="text">关注</span>
        <span class="button wechat-bgcolor">
          <span>关注</span>
          <span class="go">
            <i class="iconfont icon-xiangyou"></i>
          </span>
        </span>
      </div>
      <v-divider></v-divider>
      <div class="list-item">
        <span class="icon">
          <i class="iconfont weibo-color icon-weibo"></i>
        </span>
        <span class="count">888</span>
        <span class="text">关注</span>
        <span class="button weibo-bgcolor">
          <span>关注</span>
          <span class="go">
            <i class="iconfont icon-xiangyou"></i>
          </span>
        </span>
      </div>
      <v-divider></v-divider>
      <div class="list-item">
        <span class="icon">
          <i class="iconfont iqiyi-color icon-aqy"></i>
        </span>
        <span class="count">888</span>
        <span class="text">订阅</span>
        <span class="button iqiyi-bgcolor">
          <span>订阅</span>
          <span class="go">
            <i class="iconfont icon-xiangyou"></i>
          </span>
        </span>
      </div>
      <v-divider></v-divider>
      <div class="list-item">
        <span class="icon">
          <i class="iconfont youku-color icon-youku"></i>
        </span>
        <span class="count">888</span>
        <span class="text">订阅</span>
        <span class="button youku-bgcolor">
          <span>订阅</span>
          <span class="go">
            <i class="iconfont icon-xiangyou"></i>
          </span>
        </span>
      </div>
      <v-divider></v-divider>
      <div class="list-item">
        <span class="icon">
        <i class="iconfont bilibili-color icon-bilibili"></i>
        </span>
        <span class="count">888</span>
        <span class="text">关注</span>
        <span class="button bilibili-bgcolor">
          <span>关注</span>
          <span class="go">
            <i class="iconfont icon-xiangyou"></i>
          </span>
        </span>
      </div>
      <v-divider></v-divider>
      <div class="list-item">
        <span class="icon">
        <i class="iconfont youtube-color icon-iconyoutube"></i>
        </span>
        <span class="count">888</span>
        <span class="text">订阅</span>
        <span class="button youtube-bgcolor">
          <span>订阅</span>
          <span class="go">
            <i class="iconfont icon-xiangyou"></i>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialList',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    color: red;
  }
}
.list-content {
  padding: 10px 20px;
}
.list-item {
  padding: 10px 0px;
  display: block;
  line-height: 20px;
}
.list-item:hover {
  .button {
    width: 55px;
  }
}
.icon {
  width: 40px;
  text-align: center;
  display: inline-block;
  i {
    font-size: 24px;
  }
}
.count {
  font-size: 12px;
  font-weight: 700;
}
.text {
  color: #999;
  font-size: 12px;
  font-style: italic;
}
.button {
  font-size: 10px;
  color: white;
  float: right;
  padding: 2px 5px;
  border-radius: 2px;
  width: 34px;
  height: 24px;
  overflow: hidden;
  -webkit-transition: width 0.2s;
  transition: width 0.2s;
}
.go {
  float: right;
  i {
    font-size: 10px;
  }
}
.wechat-color {
  color: rgb(9, 187, 7);
}
.weibo-color {
  color: rgb(227, 6, 50);
}
.iqiyi-color {
  color: rgb(93, 167, 27);
}
.youku-color {
  color: rgb(47, 188, 252);
}
.bilibili-color {
  color: rgb(25, 162, 212);
}
.youtube-color {
  color: rgb(252, 0, 23);
}
.wechat-bgcolor {
  background: rgb(9, 187, 7);
}
.weibo-bgcolor {
  background: rgb(227, 6, 50);
}
.iqiyi-bgcolor {
  background: rgb(93, 167, 27);
}
.youku-bgcolor {
  background: rgb(47, 188, 252);
}
.bilibili-bgcolor {
  background: rgb(25, 162, 212);
}
.youtube-bgcolor {
  background: rgb(252, 0, 23);
}
</style>
