<template>
  <div class="container">
    <div class="leftBox">
      <div class="title">{{ contactInfo.title }}</div>
      <div class="desc">
        <div class="descFirst">{{ contactInfo.desc[0] }}</div>
        <div>{{ contactInfo.desc[1] }}</div>
      </div>
      <div class="Icon">
        <img class="line" :src="contactInfo.contactIcon.line" mode="scaleToFill">
        <img class="weChat" :src="contactInfo.contactIcon.weChat" mode="scaleToFill">
        <img class="arrow" :src="contactInfo.contactIcon.arrow" mode="scaleToFill">
      </div>
    </div>
    <div class="rightPic">
      <img :src="contactInfo.contactIcon.back" mode="scaleToFill">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contactInfo: {
      type: Object, defaults() {
        return {}
      }
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  background-color: #2A45A7;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 133px;
  padding-bottom: 99px;

  .leftBox {
    padding-left: 109px;
    text-align: left;

    .title {
      line-height: 1;
      font-size: 64px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;
    }

    .desc {
      line-height: 1;
      margin-top: 109px;
      margin-bottom: 62px;
      font-size: 24px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;

      .descFirst {
        margin-bottom: 10px;
      }
    }

    .Icon {
      display: flex;
      align-items: center;

      img {
        width: 160px;
        height: 160px;
      }

      .line {
        margin-right: 49px;
      }

      .weChat {
        margin-right: 48px;
      }

      .arrow {
        width: 58.74px;
        height: 58.74px;
      }
    }
  }

  .rightPic {

    img {
      width: 826px;
      height: 328.18px
    }
  }
}
</style>
