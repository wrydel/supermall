<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
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
</style>
