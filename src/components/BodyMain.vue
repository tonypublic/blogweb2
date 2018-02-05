<template>
  <v-container class="body">
    <v-layout row justify-space-between wrap>
      <div class="left">
        <group-subject-list></group-subject-list>
      </div>
      <div class="right">
        <group-sidebar></group-sidebar>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import GroupSidebar from '@/components/GroupSidebar'
import GroupSubjectList from '@/components/GroupSubjectList'

export default {
  name: 'BodyMain',
  data() {
    return {
      lorem: 'Welcome to Your Vue.js App'
    }
  },
  components: { GroupSubjectList, GroupSidebar }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.body {
  max-width: 1060px;
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
