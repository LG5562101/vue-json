<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="12" />
  <p>{{ name }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup(props) {
    console.log(props)
    const nameRef = ref('luoguan')
    // setInterval(() => {
    //   nameRef.value += '1'
    // }, 1000)

    watchEffect(() => {
      console.log(nameRef.value)
    })
    return {
      name: nameRef,
    }
  },
})
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
