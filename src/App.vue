<template>
  <div id="app">
    <block></block>
  </div>
</template>

<script>
import Block from './components/Block.vue'

export default {
  name: 'App',
  components: {
    Block
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,800;1,900&display=swap');
  #app {
    font-family: 'Playfair Display', serif;
  }
</style>
