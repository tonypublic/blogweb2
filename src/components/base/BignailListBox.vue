<template>
  <div class="box">
    <div class="siderbox-head head-txt">
      <span>
        <i class="iconfont icon-fire"></i>
      </span>
      <span>YEAR POPULAR</span>
    </div>
    <div class="item-list">
      <v-layout column>
        <v-flex class="item">
          <div class="item-head">
            <div class="item-thumbnail">
              <img :src="img" />
              <div class="item-duration">10:30</div>
              <div class="video-icon">
                <i class="iconfont icon-shipin"></i>
              </div>
            </div>
            <div class="item-content">
              <div class="item-labels">1</div>
              <div class="item-title">{{title}}</div>
            </div>
          </div>
          <div class="mt-2">
            <div>
              <div class="item-snippet">{{msg}}</div>
              <div class="item-readmore">Readmore</div>
            </div>
            <div class="item-post">
              <span>
                <i class="iconfont icon-time"></i>
                <span>Jun 18, 2018</span>
              </span>
            </div>
          </div>
        </v-flex>
        <v-divider></v-divider>
        <v-flex class="item">
          <div class="item-head">
            <div class="item-thumbnail">
              <img :src="img" />
              <div class="item-duration">10:30</div>
              <div class="video-icon">
                <i class="iconfont icon-shipin"></i>
              </div>
            </div>
            <div class="item-content">
              <div class="item-labels">1</div>
              <div class="item-title">{{title}}</div>
            </div>
          </div>
          <div class="mt-2">
            <div>
              <div class="item-snippet">{{msg}}</div>
              <div class="item-readmore">Readmore</div>
            </div>
            <div class="item-post">
              <span>
                <i class="iconfont icon-time"></i>
                <span>Jun 18, 2018</span>
              </span>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Welcome to Your Vue.js App.',
      msg:
        'This design is usually used for magazine, news and blogging websites, the The New York Times is the best online newspaper of world is als...',
      img: require('../../assets/watch.jpg')
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
.item-list {
  padding: 20px;
}
.item:hover {
  .item-thumbnail img {
    opacity: 0.6;
  }
  .video-icon {
    opacity: 1;
  }
}
.item-head {
  position: relative;
  display: block;
}
.item-thumbnail {
  background-color: black;
  height: 180px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.item-duration {
  margin: 15px;
  padding: 0px 5px;
  color: white;
  font-size: 14px;
  position: absolute;
  top: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}
.video-icon {
  color: white;
  opacity: 0.3;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -20px;
  i {
    font-size: 40px;
  }
}
.item-labels {
  font-size: 20px;
  letter-spacing: 2px;
  color: #fff;
  background-color: #db2f2f;
  display: inline-block;
  padding: 0px 3px;
  margin-bottom: 10px;
}
.item-content {
  position: absolute;
  bottom: 0px;
  padding: 0px 20px 15px;
  color: white;
  font-size: 20px;
  text-align: left;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    rgba(0, 0, 0, 0.8) 100%
  );
  cursor: pointer;
}
.item-title {
  text-shadow: 1px 1px 0 #000;
  display: block;
}
.item-snippet {
  display: inline;
}
.item-readmore {
  display: inline;
  color: #db2f2f;
  cursor: pointer;
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
