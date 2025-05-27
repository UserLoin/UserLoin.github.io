<template>
  <div class="container">
    <div class="title">
      <div :class=" data.list[0].info ? 'peripheralProducts' : 'shortVideo' ">{{ data.title }}</div>
    </div>
    <div class="stepBox" :class=" data.list[0].info ? 'PeripheralStepBox' : 'ShortVideoStepBox' ">
      <div class="stepItem" v-for="(item,index) in data.list" :key="index">
        <div class="imgBox">
          <img :src="item.img">
        </div>
        <div class="line"></div>
        <div class="name">{{ item.name }}</div>
        <div class="info" v-if="item.info">
          <ul>
            <li v-for="(el,index) in item.info" :key="index">{{ el }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PeripheralProducts",
  props: {
    data: {
      type: Object, defaults() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.container {
  .title {
    font-size: 64px;
    font-family: "SourceHanSansSC-Bold-2";
    font-weight: bold;
    color: #2A45A7;

    .peripheralProducts {
      margin: 126px 110px 120px 109px;
      width: 1702px;
      height: 164px;
      line-height: 164px;
      background: #E8EEFC;
    }

    .shortVideo {
      text-align: left;
      margin: 126px 0px 199px 109px;
    }
  }

  .stepBox {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .stepItem {
      width: 400px;
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
      }

      .line {
        margin-top: 28px;
        width: 400px;
        height: 4px;
        opacity: 1;
        background-color: #2A45A7;
      }

      .name {
        text-align: center;
        margin: 31px 0;
        font-size: 24px;
        font-family: "SourceHanSansSC-Heavy-2";
        font-weight: 800;
        color: #2A45A7;
      }

      .info {
        ul {
          li {
            margin: 20px 0;
            font-size: 24px;
            font-family: "SourceHanSansSC-Medium-2";
            font-weight: 500;
            color: #2A45A7;
          }
        }
      }
    }
  }

  .PeripheralStepBox {
    padding: 0 245px;
    padding-bottom: 209px;
  }

  .ShortVideoStepBox {
    padding: 0 109px;
    padding-bottom: 209px;
  }
}
</style>
