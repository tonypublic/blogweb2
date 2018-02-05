<template>
  <div class="box">
    <v-tabs centered>
      <v-tabs-bar light class="head">
        <v-tabs-slider color="red"></v-tabs-slider>
        <v-tabs-item href="#tab-1">RECENT</v-tabs-item>
        <v-tabs-item href="#tab-2">REPLIES</v-tabs-item>
      </v-tabs-bar>
      <div class="item-list">
        <v-tabs-items>
          <v-tabs-content id="tab-1">
            <div>
              <v-layout row align-center justify-space-between>
                <div class="item-title">
                  <span>{{msg}}</span>
                  <span class="item-meta ml-2">
                    <i class="iconfont icon-ico_pinglun"></i>
                    <span>28</span>
                  </span>
                </div>
                <div class="item-readmore">
                  <i class="iconfont icon-xiangyou"></i>
                </div>
              </v-layout>
            </div>
            <v-divider></v-divider>
            <div>
              <v-layout row align-center justify-space-between>
                <div class="item-title">
                  <span>{{msg}}</span>
                  <span class="item-meta ml-2">
                    <i class="iconfont icon-ico_pinglun"></i>
                    <span>28</span>
                  </span>
                </div>
                <div class="item-readmore">
                  <i class="iconfont icon-xiangyou"></i>
                </div>
              </v-layout>
            </div>
          </v-tabs-content>
          <v-tabs-content id="tab-2">
            <div>
              <v-layout row align-center justify-space-between>
                <div>
                  <div class="item-title">
                    <span class="item-author">Admin:</span>
                    <span>{{msg}}</span>
                  </div>
                  <div>
                    <span class="item-post">
                      <i class="iconfont icon-time"></i>
                      <span>Jun 18, 2018</span>
                    </span>
                  </div>
                </div>
                <div class="item-readmore">
                  <i class="iconfont icon-xiangyou"></i>
                </div>
              </v-layout>
            </div>
            <v-divider></v-divider>
            <div>
              <v-layout row align-center justify-space-between>
                <div>
                  <div class="item-title">
                    <span class="item-author">Admin:</span>
                    <span>{{msg}}</span>
                  </div>
                  <div>
                    <span class="item-post">
                      <i class="iconfont icon-time"></i>
                      <span>Jun 18, 2018</span>
                    </span>
                  </div>
                </div>
                <div class="item-readmore">
                  <i class="iconfont icon-xiangyou"></i>
                </div>
              </v-layout>
            </div>
          </v-tabs-content>
        </v-tabs-items>
      </div>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'ReplyStatsListBox',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App. Build your application today!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.head {
  color: #333;
  font-size: 16px;
  font-weight: 400;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.07);
  border-bottom: 1px solid #eee;
  z-index: 2;
}
.item-list {
  padding: 15px 20px;
}
.item-meta {
  color: red;
}
.item-post {
  color: grey;
  font-style: italic;
  text-align: right;
  i {
    font-size: 14px;
  }
}
.item-readmore {
  color: red;
  width: 30px;
  i {
    font-size: 20px;
  }
}
.divider {
  margin: 15px 0px;
}
.item-author {
  font-weight: 600;
}
</style>
