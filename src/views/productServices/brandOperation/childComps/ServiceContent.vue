<template>
  <div class="container">
    <div class="topTitle">{{ serviceContentInfo.title }}</div>
    <div class="contentItem">
      <div class="item" v-for="(item, index) in serviceContentInfo.list" :key="index">
        <img v-if="index%2 == 1" class="image" :src="item.mainImage" alt="" mode="aspectFill">
        <div class="text">
          <img class="bgImage" :src="item.bgImage" alt="">
          <div class="titleEn">{{ item.titleEn }}</div>
          <div class="title"> {{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
        <img v-if="index%2 == 0" class="image" :src="item.mainImage" alt="" mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ServiceContent",
    props: {
      serviceContentInfo: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 109px;

    .topTitle {
      margin: 107px 0px 45px;
      padding: 50px 0;
      background-color: #E8EEFC;
      font-size: 64px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #2A45A7;
    }

    .contentItem {
      display: flex;
      flex-direction: column;

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .image {
          width: 744px;
          height: 417px;
        }

        .text {
          padding: 176px 0;
          text-align: left;
          width: 744px;
          position: relative;;

          .bgImage {
            position: absolute;
            width: 301px;
            height: 290px;
            left: 338px;
            top: 163px;
          }

          .titleEn {
            padding: 14px 0; 
            font-size: 32px;
            font-family: "SourceHanSansSC-Bold-2";
            font-weight: bold;
            color: rgba(42, 69, 167, 0.5);
          }
          .title {
            padding: 14px 0; 
            font-size: 32px;
            font-family: "SourceHanSansSC-Bold-2";
            font-weight: bold;
            color: #2A45A7;
          }

          .content {
            padding: 18px 0; 
            font-size: 24px;
            font-family: "SourceHanSansSC-Medium-2";
            font-weight: 500;
            color: #2A45A7;
          }
        }
      }
    }
  }
</style>