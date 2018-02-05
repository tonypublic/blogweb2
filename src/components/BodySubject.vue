<template>
  <v-container class="body">
    <v-layout row justify-space-between wrap>
      <div class="top">
        <video-box v-if="largevediobox==true" v-on:changesize="changeSize"></video-box>
      </div>
      <div class="left">
        <video-box v-if="largevediobox==false" v-on:changesize="changeSize"></video-box>
        <!-- <component :is="currentView"></component> -->
        <group-subject-content></group-subject-content>
      </div>
      <div class="right">
        <group-sidebar></group-sidebar>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import GroupSubjectContent from '@/components/GroupSubjectContent'
import GroupSidebar from '@/components/GroupSidebar'
import VideoBox from '@/components/base/VideoBox'

export default {
  name: 'BodySubject',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      largevediobox: false
    }
  },
  methods: {
    changeSize: function() {
      this.largevediobox = !this.largevediobox
    }
  },
  components: { GroupSubjectContent, GroupSidebar, VideoBox }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.body {
  max-width: 1060px;
}
.top {
  width: 100%;
}
.left {
  width: 68.68%;
}
.right {
  width: 28.31%;
}
@media screen and (max-width: 960px) {
  .right,
  .left {
    width: 100%;
  }
}
</style>
