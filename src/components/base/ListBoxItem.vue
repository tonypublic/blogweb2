<template>
  <div class="item-box">
    <v-layout row wrap justify-space-between>
      <div class="item-thumbnail-box">
        <img class="item-thumbnail" :src="img" />
        <div class="item-duration">10:30</div>
        <div class="video-icon">
          <i class="iconfont icon-shipin"></i>
        </div>
      </div>
      <div class="item-content">
        <div class="item-labels">
          <span>分类1</span>,
          <span>分类2</span>
        </div>
        <div class="item-title">Build your application today!</div>
        <div class="item-sub mb-2">
          <span class="mr-3">
            <i class="iconfont icon-pen"></i>隔壁老王</span>
          <span class="mr-3">
            <i class="iconfont icon-time"></i>May 06, 2017</span>
          <span class="mr-3">
            <i class="iconfont icon-ico_pinglun"></i>1,234,567</span>
        </div>
        <div>
          <div class="item-snippet mr-3">At a time when literary writing seems like a dying art, when little magazines are folding left and right, when publishers bemoan the sinking...</div>
          <div class="item-readmore">Readmore</div>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      img: require('../../assets/listbox.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.item-box {
  :hover {
    .item-thumbnail {
      opacity: 0.6;
    }
    .video-icon {
      opacity: 1;
    }
  }
}
.item-thumbnail-box {
  background-color: black;
  width: 40%;
  max-height: 180px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.item-thumbnail {
  object-fit: cover;
  width: 100%;
  height: 180px;
  vertical-align: middle;
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
.item-content {
  width: 56%;
}
.item-labels {
  color: red;
  font-size: 12px;
}
.item-title {
  font-size: 24px;
  margin: 5px 0px 10px 0px;
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
@media screen and (max-width: 600px) {
  .item-thumbnail-box {
    width: 100%;
    max-height: 200px;
    margin-bottom: 10px;
  }
  .item-content {
    width: 100%;
  }
  .item-title {
    font-size: 18px;
    margin: 0px;
  }
}
</style>
