<template>
  <div class="container">
    <div class="vertical"></div>
    <div class="mainTitle">
      {{ data.title }}
    </div>
    <div class="subheading">{{ data.subheading }}</div>
    <div class="snake">
      <div class="snake1">
        <div class="circleStart"></div>
        <TimeTab :tabInfo="data.tab1"></TimeTab>
        <TimeTab :tabInfo="data.tab2"></TimeTab>
        <TimeTab :tabInfo="data.tab3"></TimeTab>
      </div>
      <div class="snake2">
        <TimeTab :tabInfo="data.tab4"></TimeTab>
        <TimeTab :tabInfo="data.tab5"></TimeTab>
        <TimeTab :tabInfo="data.tab6"></TimeTab>
        <div class="lineEnd"></div>
        <div class="circleEnd"></div>
      </div>
    </div>
  </div>
</template>
<script>
import TimeTab from './TimeTab.vue'
export default {
  name: "SnakeTimeline",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  components:{
    TimeTab
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  background: #2A45A7;
  border-radius: 0px 0px 0px 0px;
  position: relative;
  padding-bottom: 193px;


  .vertical{
      width: 4px;
      height: 100%;
      opacity: 1;
      background-color: #FFFFFF;
      position: absolute;
      margin-left: 108px;
    }

  .mainTitle{
    width: 100%;
    font-size: 64px;
    font-family: "SourceHanSansSC-Bold-2";
    font-weight: bold;
    color: #FFFFFF;
    box-sizing: border-box;
    text-align: center;
  }

  .subheading{
    margin-top: 51px;
    width: 100%;
    font-size: 24px;
    font-family: "SourceHanSansSC-Bold-2";
    font-weight: bold;
    color: #FFFFFF;
  }

  .snake{
    margin-top: 117px;
    margin-left: 187px;
    margin-right: 187px;

    .snake1{
      position: relative;
      opacity: 1;
      border: 7px solid #FFFFFF;
      margin-left: 92px;
      border-radius:0 100px 100px 0;
      border-left: none;
      display: flex;
      justify-content: space-around;
      padding: 0 100px;
      box-sizing: border-box;

      .circleStart{
        position: absolute;
        width: 72px;
        height: 72px;
        background: #E43363;
        opacity: 1;
        border-radius: 50%;
        left: -36px;
        top: -36px;
      }
    }

    .snake2{
      position: relative;
      opacity: 1;
      border: 7px solid #FFFFFF;
      border-radius: 100px 0 0 100px;
      border-right: none;
      margin-top: -7px;
      margin-right: 100px;
      display: flex;
      justify-content: space-around;
      padding: 0 0 0 200px;
      box-sizing: border-box;
    }

    .lineEnd{
      position: absolute;
      bottom: -7px;
      right: -100px;
      height: 7px;
      background: #FFFFFF;
      width: 100px;
      box-sizing: border-box;
    }

    .circleEnd{
      position: absolute;
      right: -132px;
      bottom: -36px;
      width: 72px;
      height: 72px;
      background: #E43363;
      opacity: 1;
      border-radius: 50%;
    }

  }

}
</style>
