<template>
  <div class="container">
    <img class="logo" :src="scr.logoSrc" alt="">
    <div class="follow_us">FOLLOW US</div>
    <div class="share">
      <img class="left image" :src="scr.insSrc" alt="" mode="">
      <img class="right image" :src="scr.lineSrc" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        scr: {
          logoSrc: require("@/assets/footer/logo_bottom@2x.png"),
          insSrc: require("@/assets/footer/icon_ins@2x.png"),
          lineSrc: require("@/assets/footer/icon_line@2x.png"),
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    background-color: #E8EEFC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 141px 0 148px 0;
  }

  .logo {
    width: 609px;
    height: 113px;
  }

  .follow_us {
    padding: 83px 0 76px 0;
    font-size: 32px;
    font-family: "SourceHanSansSC-Medium-2";
    font-weight: 500;
    color: #18245D;
  }

  .share {
    display: flex;
    justify-content: space-between;
  }

  .image {
    width: 160px;
    height: 160px;
  }

  .left {
    padding-right: 25px;
  }

  .right {
    padding-left: 25px;
  }
</style>