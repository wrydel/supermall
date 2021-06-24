<template>
  <div id="app">
    <router-view/>
    <main-bar/>
  </div>
</template>

<script>
import MainBar from './components/content/mainBar/MainBar'
// import { component } from 'vue/types/umd'

export default {
  name: 'App',
  components: {
    MainBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
/* @import "./assets/css/normalize.css"; */
</style>
