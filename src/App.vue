<template>
  <div id="nav">
  <MainNavBar />
  </div>
  <div id="back-to-top" @click=backToTop()><i class="fas fa-arrow-alt-circle-up"></i></div>
  <router-view />
</template>

<script>
import MainNavBar from '@/components/MainNavBar.vue'
export default {
  components: {
    MainNavBar
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>


<style>
:root {
  --main-table-border-color: #6d6d6d;
}
html {
  overflow-y: scroll;
  background-color: #000000;
  opacity: 1;
  background-image:  linear-gradient(135deg, #000789 25%, transparent 25%), linear-gradient(225deg, #000789 25%, transparent 25%), linear-gradient(45deg, #000789 25%, transparent 25%), linear-gradient(315deg, #000789 25%, #000000 25%);
  background-position:  4px 0, 4px 0, 0 0, 0 0;
  background-size: 4px 4px;
  background-repeat: repeat;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #7cbdf7;
  margin: auto;
}
#nav {
  height: 100vh;
  width: 250px;
  float: left;
  position: fixed;
  position: -webkit-fixed;
  background: #262626;
  top: 0;
}
img {
  width: auto;
  height: auto;
}
.sub-nav ul {
  line-height: 40px;
}
#back-to-top {
  cursor: pointer;
  display: none;
  position: fixed;
  right: 30px;
  bottom: 40px;
}
#back-to-top .fas{
  transform: scale(2.5)
}
.container {
  float: left;
  width: calc(100% - 400px);
  padding: 25px 35px;
  margin-left: 300px;
}
</style>
