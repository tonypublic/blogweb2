<template>
  <v-app light id="app">
    <Header></Header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>© {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', 'Microsoft YaHei'; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  /* color: #2c3e50; */
  background-color: rgb(239, 239, 239);
}
.content {
  margin-top: 80px;
}
</style>
