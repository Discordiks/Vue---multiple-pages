<template>
  <div class="color">
    <MyCounter count_start=""></MyCounter>
  </div>
</template>

<script>
import MyCounter from '../components/MyCounter.vue'

export default {
  name: 'App',
  components: {
    MyCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

