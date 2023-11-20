<template>
  <div class="text_" id="app">
    <input type="text" v-model="t1">
    <h2>{{ t1 }}</h2>
    <button @click="reverseMessage">
      Перевернуть текст
    </button>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      t1: ""
    }
  },
  methods: {
    reverseMessage() {
      this.t1 = this.t1
        .split('')
        .reverse()
        .join('')
    }
  }
}
</script>
<style>
#app.text_ {
  margin-top: 0px;
}
</style>