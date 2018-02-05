<template>
  <v-layout row justify-space-between wrap>
    <item-box class="mb-3" type="1" size="big"></item-box>
    <list-box class="mb-3"></list-box>
    <div class="smallbox">
      <item-box class="mb-3" type="2" size="small"></item-box>
    </div>
    <div class="smallbox">
      <item-box class="mb-3" type="2" size="small"></item-box>
    </div>
    <div class="smallbox">
      <item-box class="mb-3" type="2" size="small"></item-box>
    </div>
    <div class="smallbox">
      <item-box class="mb-3" type="2" size="small"></item-box>
    </div>
    <div class="smallbox">
      <item-box class="mb-3" type="2" size="small"></item-box>
    </div>
  </v-layout>
</template>

<script>
import ItemBox from './base/ItemBox.vue'
import ListBox from './base/ListBox.vue'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { ItemBox, ListBox }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.smallbox {
  width: 49%;
}
@media screen and (max-width: 600px) {
  .smallbox {
    width: 100%
  }
}
</style>
