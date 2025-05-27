<template>
  <div class="container">
    <div class="title">{{ channelPlanningInfo.title }}</div>
    <div class="content">
      <div class="circleBg">
        <img class="bgImage" :src="channelPlanningInfo.all_bg_image" alt="">
        <div class="circle item0">
          <div class="bgContent">
            <img class="itemImage" :src="channelPlanningInfo.list[0].image" alt="">
            <div class="itemTitle">{{ channelPlanningInfo.list[0].title }}</div>
          </div>
        </div>
        <div class="circle item1">
          <div class="bgContent">
            <img class="itemImage" :src="channelPlanningInfo.list[1].image" alt="">
            <div class="itemTitle">{{ channelPlanningInfo.list[1].title }}</div>
          </div>
        </div>
        <div class="circle item2">
          <div class="bgContent">
            <img class="itemImage" :src="channelPlanningInfo.list[2].image" alt="">
            <div class="itemTitle">{{ channelPlanningInfo.list[2].title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="info"> {{ channelPlanningInfo.info }} </div>
    <div class="image">
      <img class="bottomImage" :src="channelPlanningInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChannelPlanning',
    props: {
      channelPlanningInfo: {
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
      padding: 60px;
      box-sizing: border-box;
      width: 840px;
      background: #E43363;
      border-radius: 24px 24px 24px 24px;
      z-index: 1;
      position: relative;
      font-size: 24px;
      font-family: "SourceHanSansSC-Medium-2";
      font-weight: 500;
      color: #FFFFFF;
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