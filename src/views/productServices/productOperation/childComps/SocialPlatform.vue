<template>
  <div class="container">
    <div class="title">{{ data.title }}</div>
    <div class="subtitle">{{ data.subtitle }}</div>
    <div class="contenLine1 box">
      <ul>
        <li v-for="(item,index) in data.list[0].name" :key="index">{{ item }}</li>
      </ul>
      <img class="image" :src="data.list[0].img">
    </div>
    <div class="contenLine2">
      <div class="leftBox box">
        <ul>
          <li v-for="(item,index) in data.list[1].name" :key="index">{{ item }}</li>
        </ul>
        <img class="image" :src="data.list[1].img">
      </div>
      <div class="rightBox box">
        <ul>
          <li v-for="(item,index) in data.list[2].name" :key="index">{{ item }}</li>
        </ul>
        <img class="image" :src="data.list[2].img">
      </div>
    </div>
    <div class="contenLine3">
      <div class="leftBox box">
        <ul>
          <li v-for="(item,index) in data.list[3].name" :key="index">{{ item }}</li>
        </ul>
        <img class="image" :src="data.list[3].img">
      </div>
      <div class="rightBox box">
        <ul>
          <li v-for="(item,index) in data.list[4].name" :key="index">{{ item }}</li>
        </ul>
        <img class="image" :src="data.list[4].img">
      </div>
    </div>
    <div class="contentImg">
      <img :src="data.img">
    </div>
  </div>
</template>
<script>
export default {
  name: "SocialPlatform",
  props: {
    data: {
      type: Object, defaults() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.container {
  .box {
    box-sizing: border-box;
    width: 300px;
    height: 300px;
    background: #E8EEFC;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;

    li {
      font-size: 32px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #2A45A7;
      margin: 10px 0px;
      position: relative;
      z-index: 10;
    }

    .image {
      position: absolute;
      top: -22px;
      left: -22px;
      width: 110px;
      height: 110px;
    }
  }

  .title {
    margin: 53px auto;
    margin-top: 170px;
    font-size: 64px;
    font-family: "SourceHanSansSC-Bold-2";
    font-weight: bold;
    color: #2A45A7;
  }

  .subtitle {
    margin: 0 auto;
    font-size: 32px;
    font-family: "SourceHanSansSC-Bold-2";
    font-weight: bold;
    color: #2A45A7;
    margin-bottom: 127px;
  }

  .contenLine1 {
    margin: 0 auto;
  }

  .contenLine2 {
    margin-top: -200px;
    display: flex;
    justify-content: space-between;
    padding-left: 455px;
    padding-right: 411px;
  }

  .contenLine3 {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
    padding-left: 260px;
    padding-right: 234px;
  }

  .contentImg {
    margin-top: -314px;
    margin-bottom: 212px;

    img {
      width: 602px;
      height: 717.26px;
    }
  }
}
</style>
