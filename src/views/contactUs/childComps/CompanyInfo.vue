<template>
  <div class="container">
    <div class="title">{{ companyInfo.title }}</div>
    <div class="line"></div>
    <div class="inforBox" v-for="(item,index) in companyInfo.list" :key="index">
      <div class="nameBox">
        <div class="name">{{ item.name }}</div>
        <div>
          <div v-if="!(item.info instanceof Array)" class="info">{{ item.info }}</div>
          <div v-else class="info">
            <ul>
              <li v-for="(el,index) in item.info" :key="index">{{ el }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="dotted"></div>
    </div>
    <div class="vertical"></div>
  </div>
</template>
<script>
export default {
  name: "CompanyInfo",
  props: {
    companyInfo: {
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
.container {
  width: 100%;
  padding-bottom: 200px;
  background-color: #2A45A7;
  position: relative;

  .vertical{
    width: 4px;
    height: 100%;
    opacity: 1;
    background-color: #FFFFFF;
    position: absolute;
    left: 108px;
    z-index: 0;
    top: 0;
  }

  .title {
    margin-left: 438px;
    width: 1200px;
    text-align: center;
    padding-top: 41px;
    font-size: 64px;
    font-family: "SourceHanSansSC-Bold-2";
    font-weight: bold;
    color: #FFFFFF;
  }

  .line {
    margin-left: 438px;
    margin-top: 72px;
    width: 1200px;
    height: 2px;
    opacity: 1;
    background-color:#FFFFFF;
  }

  .inforBox {
    margin-left: 438px;
    .nameBox {
      min-height: 161px;
      font-size: 24px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;
      text-align: left;
      display: flex;
      align-items: center;

      .name {
        text-align: left;
        margin-left: 0px;
        width: 296px;
        text-align: center;
      }

      .info {
        padding: 25px 0;
        margin-left: 34px;
        font-weight: 500;

        li {
          padding: 5px 0;
        }
      }
    }

    .dotted {
      width: 1200px;
      height: 0px;
      opacity: 1;
      border: 2px dashed #FFFFFF;
    }
  }
}
</style>
