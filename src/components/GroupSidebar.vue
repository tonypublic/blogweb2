<template>
  <v-layout column>
    <v-flex class="mb-3" d-flex>
      <quote-box></quote-box>
    </v-flex>
    <v-flex class="mb-3" d-flex>
      <social-list></social-list>
    </v-flex>
    <v-flex class="mb-3" d-flex>
      <txt-list-box></txt-list-box>
    </v-flex>
    <v-flex class="mb-3" d-flex>
      <thumbnail-list-box></thumbnail-list-box>
    </v-flex>
    <v-flex class="mb-3" d-flex>
      <bignail-list-box></bignail-list-box>
    </v-flex>
    <v-flex d-flex>
      <v-card color="blue lighten-2" dark>
        <v-card-text v-text="lorem.slice(0, 100)">
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import SocialList from './base/SocialList.vue'
import QuoteBox from './base/QuoteBox.vue'
import TxtListBox from './base/TxtListBox.vue'
import ThumbnailListBox from './base/ThumbnailListBox.vue'
import BignailListBox from './base/BignailListBox.vue'

export default {
  name: 'GroupSidebar',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      lorem: 'Welcome to Your Vue.js App'
    }
  },
  components: { SocialList, QuoteBox, TxtListBox, ThumbnailListBox, BignailListBox }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
