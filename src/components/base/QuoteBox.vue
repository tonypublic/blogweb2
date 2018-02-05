<template>
  <div class="box quote-box">
    <div class="quote-background">
      <img :src="img" />
    </div>
    <div class="item-header">MAIN QUOTE</div>
    <div class="item-content">
      <i class="quote-icon iconfont icon-quote-left"></i>
      <div class="quote-content">Design is not just what it looks like and feels like. Design is how it works.</div>
      <div class="quote-author">- Steve Jobs</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteBox',
  data() {
    return {
      img: require('../../assets/steve-jobs.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.quote-box {
  height: 254px;
  background-color: black;
  display: block;
  z-index: 0;
}
.quote-background {
  position: absolute;
  z-index: -1;
  opacity: 0.3;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.item-header {
  padding: 20px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.07);
}
.quote-icon {
  position: absolute;
  bottom: 0px;
  opacity: 0.2;
  font-size: 70px;
}
.item-content {
  padding: 20px;
  font-size: 18px;
  font-style: italic;
  color: white;
}
.quote-content {
  padding-left: 20px;
  line-height: 35px;
}
.quote-author {
  text-align: right;
  margin-top: 30px;
  font-style: normal;
}
@media screen and (max-width: 960px) {
  .quote-box {
    height: 182px;
  }
  .quote-background {
    img {
      width: 100%;
      margin-top: -20%;
    }
  }
}
@media screen and (min-width: 960px) {
  .quote-background {
    img {
      height: 100%;
      margin-left: -12%;
    }
  }
}
</style>
