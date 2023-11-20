<template>
  <input v-model="count"><br><br>
  <div v-if="count > 0 && count != 0" style="color: red">{{ count }}</div>
  <div v-if="count < 0 && count != 0" style=" color: green">{{ count }}</div>
  <div v-if="count == 0" style=" color: black">{{ count }}</div><br>
  <button @click='count--'>-1</button>
  Уменьшить | Увеличить
  <button @click='count++'>+1</button><br><br>
</template>


<script>
export default {
  name: 'MyCounter',
  props: {
    count_start: Number
  },
  mounted() {
    this.count = this.count_start
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
