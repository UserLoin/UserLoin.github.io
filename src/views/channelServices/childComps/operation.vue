<template>
  <div class="container">
    <div class="containerTitle">
      {{  operationInfo.socialMedia.title }}
    </div>
    <div class="containerText">
      {{  operationInfo.socialMedia.content }}
    </div>
    <div>
      <div class="channel">
        {{  operationInfo.socialMedia.channel }}
      </div>
      <div class="channelDetails">
        <div class="channelBlock" v-for="(item,index) in operationInfo.socialMedia.list" :key="index">
            <img :src="item.imageSrc"/>
            <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="containerTitle">
      {{  operationInfo.eCommerce.title }}
    </div>
    <div>
      <div class="channel">
        {{  operationInfo.eCommerce.channel }}
      </div>
      <div class="channelDetails">
        <div class="channelBlock" v-for="(item,index) in operationInfo.eCommerce.list" :key="index">
            <img :src="item.imageSrc"/>
            <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="containerTitle">
      {{  operationInfo.liveBroadcast.title }}
    </div>
    <div>
      <div class="channel">
        {{  operationInfo.liveBroadcast.channel }}
      </div>
      <div class="channelDetailsLive">
        <div class="channelBlockLive" v-for="(item,index) in operationInfo.liveBroadcast.list" :key="index">
            <img :src="item.imageSrc"/>
            <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'operation',
  props: {
    operationInfo: {
      type: Object, default() {
        return {}
      }
    },
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 107px 109px 0;

  .containerTitle{
      height: 164px;
      background: #E8EEFC;
      opacity: 1;
      font-size: 64px;
      line-height: 164px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #2A45A7;
      margin-bottom: 121px;
  }

  .containerText{
    padding: 0 295px 90px 288px;
    font-size: 24px;
    font-family: "SourceHanSansSC-Medium-2";
    font-weight: 500;
    color: #2A45A7;
    text-align: left;

  }

  .channel{
      line-height: 64px;
      font-size: 64px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #2A45A7;
  }

  .channelDetails{
    margin-top: 120px;
    display: grid;
    grid-template-columns: repeat(3, 358px);
    justify-content:space-between;
    padding: 0  225px 0 228px;

    .channelBlock{

      img{
        height: 218px;
        width: 218px;
        margin-bottom: 60px;
        text-align: center;
      }

      p{
        text-align: center;
        height: 48px;
        font-size: 48px;
        font-family: "SourceHanSansSC-Bold-2";
        font-weight: bold;
        color: #2A45A7;
        margin-bottom: 123px;
      }
    }
  }

  .channelDetailsLive{
    margin-top: 120px;
    display: grid;
    grid-template-columns: repeat(4, 358px);
    justify-content:space-between;
    padding: 0  225px 315px 138px;

    .channelBlockLive{

      img{
        height: 218px;
        width: 218px;
        margin-bottom: 60px;
        text-align: center;
      }

      p{
        text-align: center;
        height: 48px;
        font-size: 48px;
        font-family: "SourceHanSansSC-Bold-2";
        font-weight: bold;
        color: #2A45A7;
        margin-bottom: 123px;
      }
    }
  }
}
</style>
