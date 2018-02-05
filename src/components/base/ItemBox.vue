<template>
  <div class="item-box">
    <div>
      <div class="item-head">
        <v-parallax class="item-thumbnail" :src="img" :height="imgheight">
        </v-parallax>
        <div class="item-content" :class="styletype.p">
          <div class="item-labels">标签</div>
          <div class="item-title" :class="styletype.t" @click="gotoSubject">Build your application today!</div>
          <div v-if="type=='2'">
            <span class="italic grey--text mr-2">By</span>
            <span>隔壁老王</span>
          </div>
        </div>
        <div class="item-duration" :class="styletype.m">
          <div :class="styletype.dt">10:30</div>
        </div>
        <div class="video-icon" :class="styletype.v">
          <i class="iconfont icon-shipin"></i>
        </div>
      </div>
      <div class="item-sub" :class="styletype.p">
        <div v-if="type=='1'" class="mb-3">
          <span class="mr-3">
            <i class="iconfont icon-pen"></i>隔壁老王</span>
          <span class="mr-3">
            <i class="iconfont icon-time"></i>May 06, 2017</span>
          <span class="mr-3">
            <i class="iconfont icon-ico_pinglun"></i>1,234,567</span>
        </div>
        <div>
          <div class="item-snippet mr-3">If you appreciate my work I would be honored to receive your like on my official page. Visualisation made during state of art academy master...</div>
          <div class="item-readmore">Readmore</div>
        </div>
        <div v-if="type=='2'" class="mt-3">
          <span class="mr-3">
            <i class="iconfont icon-time"></i>May 06, 2017</span>
          <span class="mr-3">
            <i class="iconfont icon-ico_pinglun"></i>1,234,567</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemBoxLg',
  props: ['type', 'size'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      img: require('../../assets/architecture.jpg')
    }
  },
  computed: {
    styletype: function() {
      switch (this.size) {
        case 'small':
          return { p: 'p-small', t: 't-small', dt: 'dt-small', m: 'm-small', v: 'v-small' }
        case 'big':
        default: {
          return { p: 'p-big', t: 't-big', dt: 'dt-big', m: 'm-big', v: 'v-big' }
        }
      }
    },
    imgheight: function() {
      switch (this.type) {
        case '1':
          return 350
        case '2':
          return 200
      }
    }
  },
  methods: {
    // 文章详情跳转
    gotoSubject: function() {
      this.$router.push('/p/123')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.item-box {
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.05);
  :hover {
    .item-thumbnail {
      opacity: 0.6;
    }
    .video-icon {
      opacity: 1;
    }
  }
}
.item-head {
  position: relative;
  background-color: #000;
}
.item-content {
  color: white;
  text-align: left;
  position: absolute;
  width: 100%;
  bottom: 0px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    rgba(0, 0, 0, 0.8) 100%
  );
  cursor: pointer;
}
.item-labels {
  font-size: 12px;
  letter-spacing: 2px;
  color: #fff;
  background-color: #db2f2f;
  display: inline-block;
  padding: 0px 3px;
  margin-bottom: 10px;
}
.item-title {
  text-shadow: 1px 1px 0 #000;
  display: block;
}
.item-duration {
  padding: 0px 5px;
  color: white;
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
}
.item-sub {
  i {
    font-size: 14px;
    margin-right: 5px;
  }
}
.item-snippet {
  display: inline;
}
.item-readmore {
  display: inline;
  color: #db2f2f;
  cursor: pointer;
}
.p-big {
  padding: 30px;
}
.p-small {
  padding: 20px;
}
.m-big {
  margin: 30px;
}
.m-small {
  margin: 20px;
}
.t-big {
  font-size: 30px;
}
.t-small {
  font-size: 18px;
}
.dt-big {
  font-size: 18px;
}
.dt-small {
  font-size: 14px;
}
.v-big {
  top: 50%;
  left: 50%;
  margin-top: -30px;
  margin-left: -30px;
  i {
    font-size: 60px;
  }
}
.v-small {
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -20px;
  i {
    font-size: 40px;
  }
}
</style>
