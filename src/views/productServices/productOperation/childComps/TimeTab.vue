<template>
  <div class="containerTab">
    <img :src="tabInfo.src"/>
    <div class="containerTabTitle">{{ tabInfo.title }}</div>
    <div class="containerTabContent">
      <div v-for='(item,index) in tabInfo.content' :key="index">{{ item }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TimeTab",
  props: {
    tabInfo: {
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
.containerTab {
  margin-top: -36px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 66px;
    height: 66px;
  }

  .containerTabTitle{
    font-size: 24px;
    font-family: "SourceHanSansSC-Bold-2";
    font-weight: bold;
    color: #FFFFFF;
    margin-top: 24px;
    text-align: center;
    width: 350px;
  }

  .containerTabContent{
    margin-top: 25px;
    padding: 5px;
    width: 350px;
    border-radius: 24px 24px 24px 24px;
    opacity: 1;
    border: 4px solid #FFFFFF;
    font-size: 20px;
    font-family: "SourceHanSansSC-Medium-2";
    font-weight: 500;
    color: #FFFFFF;
    min-height: 227px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

}
</style>
