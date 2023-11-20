<template>
  <img src="./assets/genshin.jpeg" style="width: 400px" alt="Что ж">
  <nav>
    <router-link to="/">Счётчик</router-link> |
    <router-link to="/text_">Работа с текстом</router-link> |
    <router-link :to="{ name: 'data_' }">Список</router-link>
  </nav>
  <!-- <button @click="$router.go(-1)">Назад</button> -->

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
