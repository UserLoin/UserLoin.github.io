<template>
  <div class="container">
    <div class="horizontal"></div>
    <div class="vertical"></div>
    <div class="icon"><img :src="imgIcon"/></div>
    <div class="rightImg"  v-if="content.rightImg"><img :src="content.rightImg"/></div>
    <div class="mainContent">
      <div class="topOffset"></div>
      <div v-if="content.englishName&&!content.isHomePage" class="englishName"> {{ content.englishName }}</div>
      <div v-if="content.englishName&&content.isHomePage" class="englishNameHome"> {{ content.englishName }}  <p>{{ content.frontIntroText }}</p></div>
      <div v-if="content.name" class="name">{{ content.name }}</div>
      <div v-if="content.frontIntroText || content.introText" class="introText"><p>{{ content.frontIntroText }}</p>{{ content.introText }}</div>
      <div v-if="content.serviceInclude" class="serviceInclude"><p>{{ content.serviceInclude }}</p>{{ content.endIntroText }}</div>
      
      <div v-if="content.bottomImg" class="bottom">
        <img class="bottomImg" v-if="content.bottomImg" :src="bottomImg"/>
        <div class="more" v-if="content.isHomePage" @click="moreAction">
          <div class="title">{{ content.title }}</div>
          <img :src="content.arrowSmall" mode="aspectFill">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "TopPage",
    props: {
      content: Object, default() {
        return {}
      }
    },
    data() {
      return {
        imgIcon:require("../../../assets/topPage/OffshoreRSS_logo_top.png"),
        bottomImg:require("@/assets/topPage/pic_city.png"),
        topIntroduce: {
            title: 'Learn more',
            arrowSmall: require("@/assets/homepage/icon_arrow_small@2x.png"),
          },
      }
    },
    methods: {
      moreAction() {
        this.$router.push({
          path: '/ContactUs',
        })
        sessionStorage.setItem('serviceIndex', 3)
        document.getElementById('chooseServiceIndexID0').className = "item"
        document.getElementById('chooseServiceIndexID3').className = "item active"
      }
    }
  }
</script>

<style lang="scss" scoped>
.container{
  width: 1921px;
  background: #2A45A7;
  opacity: 1;
  position: relative;

  .horizontal{
    width: 1921px;
    height: 4px;
    opacity: 1;
    background-color: #FFFFFF;
    position: absolute;
    margin-top: 94px;
    z-index: 1;
  }

  .vertical{
    width: 4px;
    height: 100%;
    opacity: 1;
    background-color: #FFFFFF;
    position: absolute;
    margin-left: 108px;
  }

  .icon{
    width:357px;
    height: 57px;
    padding: 0 26px;
    box-sizing: border-box !important;
    position: absolute;
    margin: 68px 0 0 30px;
    background-color: #2A45A7;
    z-index: 2;

    img{
      width: 305px;
      height: 57px;
    }

  }

  .rightImg{
    position: absolute;
    right: 0;
    top: 0;

    img{
      width: 898px;
      height: 799px;
    }

  }

  .mainContent{
    padding-left: 232px;
    min-height: 1000px;
    
    .topOffset {
      height: 232px;
    }

    .englishName{
      width: 558px;
      height: 48px;
      font-size: 48px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;
      line-height: 56px;
      opacity: 0.1;
      text-align: left;
    }
    .englishNameHome{
      padding-top: 42px;
      font-size: 64px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;
      text-align: left;

      p {
        color: #EAFF74;
        display: inline-block;
      }
    }

    .name{
      text-align: left;
      font-size: 64px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;
      margin-top: 41px;
    }

    .introText{
      width: 645px;
      font-size: 24px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;
      text-align: left;
      margin-top: 137px;

      p {
      font-size: 24px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #EAFF74;
      display: inline-block;
    }
    }

    .serviceInclude{
      margin-top: 50px;
      width: 645px;
      font-size: 24px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      text-align: left;
      color: #EAFF74;

      p{
        color: #FFFFFF;
        display: inline-block;
      }
    }

    .bottom {
      margin-left: -18px;
      margin-top: 69px;
      position: relative;
      z-index: 1;
      text-align: left;

      .bottomImg {
        width: 922px;
        height: 348px;
      }

      .more {
        position: absolute;
        top: 36px;
        left: 18px;
        display: flex;
        align-items: center;

        .title {
          left:15px;
          font-size: 24px;
          font-family: "SourceHanSansSC-Medium-2";
          font-weight: 400;
          color: #EAFF74;
        }

        img {
          margin-left: 13px;
          width: 30px;
          height: 30px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

</style>
