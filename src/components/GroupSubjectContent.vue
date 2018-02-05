<template>
  <div>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
    <h1>{{ msg }}</h1>
    <div class="item-sub">
      <div class="mb-3">
        <span class="mr-3">
          <i class="iconfont icon-pen"></i>隔壁老王</span>
        <span class="mr-3">
          <i class="iconfont icon-time"></i>May 06, 2017</span>
        <span class="mr-3">
          <i class="iconfont icon-ico_pinglun"></i>1,234,567</span>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="post-body">
      <div class="post-excerpt">I decided to quit my jobs immediately when I see that magazine template. My millionaire story is pretty simple, and you can do it by yoursel...</div>
      <div>Cursus conchita kim hoffman trending bowl spider, puppy football videos. Giant renee samsung kardashian ipsum aliquam the tracy dapibus. Penatibus talent lacinia more accumsan puppy winner mcconaughey. Nascetur germany bend baby stays integer vitae lacinia. Dapibus elit convallis stays fermentum nokia aenean cras netherlands. Rap melody jennifer talent israel bird mattis suarez iaculis ligula. Maecenas ridiculus leto phelps arcu bibendum senectus. Women jennifer puppy simon zellweger congue epic venenatis facilisis.
      </div>
    </div>
    <!-- <v-divider class="mb-0"></v-divider> -->
    <v-layout row align-center justify-space-between wrap>
      <div class="item-labels">
        <i class="iconfont icon-labels"></i>
        <span class="item-section-title mr-2">LABELS</span>
        <span class="item-labels-name mr-2">科技</span>
        <span class="item-labels-name">游戏</span>
      </div>
      <v-fab-transition>
        <v-speed-dial v-model="fab" direction="left" hover transition="slide-x-reverse-transition">
          <v-btn slot="activator" color="blue darken-2" dark fab hover right v-model="fab">
            <v-icon>share</v-icon>
            <v-icon>close</v-icon>
          </v-btn>
          <v-btn fab dark small right color="green">
            <i class="share-icon iconfont icon-weixin"></i>
          </v-btn>
          <v-btn fab dark small right color="red">
            <i class="share-icon iconfont icon-weibo"></i>
          </v-btn>
        </v-speed-dial>
      </v-fab-transition>
    </v-layout>
    <v-divider></v-divider>
    <navigate-box></navigate-box>
  </div>
</template>

<script>
import NavigateBox from './base/NavigateBox'
export default {
  name: 'GroupSubjectContent',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      fab: 'false',
      items: [
        {
          text: 'Dashboard',
          disabled: false
        },
        {
          text: 'Link 1',
          disabled: false
        },
        {
          text: 'Link 2',
          disabled: true
        }
      ]
    }
  },
  components: { NavigateBox }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.item-sub {
  i {
    font-size: 14px;
    margin-right: 5px;
  }
}
.divider {
  margin: 10px 0px 20px;
}
.post-body {
  font-size: 15px;
  line-height: 1.5em;
  text-align: justify;
}
.post-excerpt {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #e8e8e8;
}
.item-labels {
  i {
    font-size: 19px;
  }
}
.item-section-title {
  font-size: 16px;
  font-weight: 500;
}
.item-labels-name {
  font-size: 12px;
  letter-spacing: 2px;
  color: #fff;
  background-color: red;
  border-radius: 2px;
  display: inline-block;
  padding: 0px 3px;
}
.share-icon {
  font-size: 20px;
}
.wechat-color {
  color: rgb(9, 187, 7);
}
.weibo-color {
  color: rgb(227, 6, 50);
}
</style>
