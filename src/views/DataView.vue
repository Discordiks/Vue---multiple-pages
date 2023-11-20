<template>
  <div class="data_">
    <div class="center">
      <p v-for="(todo, i) in todos" :key="i">{{ i + 1 }}) {{ todo.text }} </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      todos: [
        { text: 'Выучить JavaScript' },
        { text: 'Выучить Vue' },
        { text: 'Научиться программировать' }
      ],
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
.data_ {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.center {
  text-align: left;
}
</style>
