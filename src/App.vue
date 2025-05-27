<template>
  <div id="app">
    <!-- header -->
    <div class="header">
      <Header></Header>
    </div>

    <!-- router -->
    <div class="router">
      <router-view></router-view>
    </div>

    <!-- footer -->
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script scoped>
import Header from "@/views/header/Header.vue"
import Footer from "@/views/footer/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "SourceHanSansSC-Medium-2";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  background-color: #FFFFFF
}

.header {
  position: fixed;
  right: 0;
  top: 48px;
  z-index: 100;
}

</style>
