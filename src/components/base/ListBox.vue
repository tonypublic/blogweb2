<template>
  <div class="list-box">
    <list-box-item class="mb-3"></list-box-item>
    <v-divider class="mb-3"></v-divider>
    <list-box-item></list-box-item>
  </div>
</template>

<script>
import ListBoxItem from './ListBoxItem.vue'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      img: require('../../assets/listbox.jpg')
    }
  },
  components: { ListBoxItem }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list-box {
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

</style>
