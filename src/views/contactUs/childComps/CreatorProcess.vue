<template>
  <div class="CreatorProcess">
    <div class="title">
      <div>{{ creatorProcessInfo.title }}</div>
      <img class="image" :src="creatorProcessInfo.icon">
    </div>
    <div class="stepBox">
      <div class="stepItem" v-for="(item,index) in creatorProcessInfo.list" :key="index">
        <div class="imgBox">
          <img :src="item.img">
          <div class="step">{{ item.step }}</div>
        </div>
        <div class="line"></div>
        <div class="name">{{ item.name }}</div>
        <div class="info">{{ item.info }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreatorProcess",
  props: {
    creatorProcessInfo: {
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
<style lang="scss" scoped>
.CreatorProcess {
  .title {
    display: flex;
    justify-content: center;
    
    div {
      padding-top: 107px;
      text-align: left;
      font-size: 64px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #2A45A7;
    }
    .image {
      display: inline-block;
      width: 44.94px;
      height: 60.38px;
      padding-top: 87px;
    }
  }

  .stepBox {
    display: flex;
    justify-content: space-between;
    padding: 175px 106px;
    padding-bottom: 184px;

    .stepItem {
      .imgBox {
        width: 279px;
        height: 279px;
        border-radius: 50%;
        position: relative;
        margin: 0 auto;

        img {
          width: 279px;
          height: 279px;
        }

        .step {
          background: #EAFF74;
          border-radius: 4px;
          line-height: 1;
          padding: 9px 20px 11px 21px;
          position: absolute;
          top: 7px;
          left: 160px;
          font-size: 32px;
          font-family: "SourceHanSansSC-Bold-2";
          font-weight: bold;
          color: #24262B;
        }
      }

      .line {
        margin-top: 28px;
        width: 400px;
        height: 4px;
        opacity: 1;
        background-color: #2A45A7;
      }

      .name {
        text-align: left;
        margin: 31px 0;
        font-size: 24px;
        font-family: "SourceHanSansSC-Heavy-2";
        font-weight: 800;
        color: #2A45A7;
      }

      .info {
        text-align: left;
        width: 400px;
        font-size: 24px;
        font-family: "SourceHanSansSC-Medium-2";
        font-weight: 500;
        color: #2A45A7;
      }
    }
  }
}
</style>
