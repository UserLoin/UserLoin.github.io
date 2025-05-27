<template>
  <div class="container">
    <div class="title">{{ data.title }}</div>
    <div class="subTitle">{{ data.subTitle }}</div>
    <div class="content">
      <div class="circleBg">
        <img class="bgImage" :src="data.all_bg_image" alt="">
        <div class="circle item0">
          <div class="bgContent">
            <img class="itemImage" :src="data.list[0].image" alt="">
            <div class="itemTitle">{{ data.list[0].title }}</div>
          </div>
        </div>
        <div class="circle item1">
          <div class="bgContent">
            <img class="itemImage" :src="data.list[1].image" alt="">
            <div class="itemTitle">{{ data.list[1].title }}</div>
          </div>
        </div>
        <div class="circle item2">
          <div class="bgContent">
            <img class="itemImage" :src="data.list[2].image" alt="">
            <div class="itemTitle">{{ data.list[2].title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="info"> 
      <div class="infoTitle"> {{ data.info.title }} </div>
      <div class="infoContent"> {{ data.info.content }}  </div>
    </div>
    <div class="image">
      <img class="bottomImage" :src="data.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LiveOperation',
    props: {
      data: {
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
    background-color: #2A45A7;

    .title {
      padding: 118px 176px 0 176px;
      font-size: 64px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;
      text-align: left;
    }

    .subTitle {
      padding: 58px 176px 0 176px;
      font-size: 24px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;
      text-align: left;
    }

    .content {
      margin-top: 85px;

      .circleBg {
        margin: 80px 179px 0px 234px ;
        display: flex;
        justify-content: space-between;
        position: relative;

        .bgImage {
          position: absolute;
          top: 0;
          left: 0;
          width: 1507px;
          height: 676px;
        }

        .item0 {
          margin-top: 169px;
        }

        .item1 {
          margin-top: 197px;
        }

        .circle {
          width: 384px;
          height: 384px;
          position: relative;;
          display: flex;
          justify-content: center;
          align-items: center;

          .bgImage {
            position: absolute;
            top: 0;
            left: 0;
            width: 384px;
            height: 384px;
            z-index: 1;
          }

          .bgContent {
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1;

            .itemImage {
              width: 86px;
              height: 86px;
            }

            .itemTitle {
              padding-top: 20px;
              font-size: 24px;
              font-family: "SourceHanSansSC-Medium-2";
              font-weight: 500;
              color: #2A45A7;
              width: 217px;
            }
          }
        }
      }
    }

    .info {
      margin-top: 95px;
      margin-left: 914px;
      padding: 74px 0px;
      width: 840px;
      background: #E43363;
      border-radius: 24px 24px 24px 24px;
      z-index: 1;
      position: relative;
      
      .infoTitle {
        font-size: 32px;
        font-family: "SourceHanSansSC-Heavy-2";
        font-weight: 800;
        color: #FFFFFF;
        opacity: 0.5;
      }
      .infoContent {
        margin-top: 32px;
        padding:0 60px;
        font-size: 24px;
        font-family: "SourceHanSansSC-Medium-2";
        font-weight: 500;
        color: #FFFFFF;
        box-sizing: border-box;
        white-space: pre-line; // 合并空白符序列，但保留换行符
        line-height: 40px;
      }
    }

    .bottomImage {
      margin-top: -40px;
      margin-left: -52px;
      margin-bottom: 146px;
      width: 1400px;
      height: 668px;
      z-index: -1;
    }
  }
</style>