<template>
  <div class="container">
    <div class="title">{{ data.title }}</div>
    <div class="subtitle" v-if="data.subtitle">{{ data.subtitle }}</div>
    <div class="stepBox" :class=" data.subtitle ? 'stepItemInnovative' : 'stepItemEstablishment' ">
      <div class="stepItem" v-for="(item,index) in data.list" :key="index">
        <div class="imgBox">
          <img :src="item.img">
          <div class="step" v-if="!(data.subtitle)">{{ item.step }}</div>
        </div>
        <div class="line"></div>
        <div class="name" :class=" data.subtitle ? 'nameInnovative' : 'nameEstablishment' ">{{ item.name }}</div>
        <div v-if="item.info" :class=" data.subtitle ? 'itemInnovative' : 'itemEstablishment' ">
          <div v-if="!(item.info instanceof Array)" class="info">{{ item.info }}</div>
          <div v-else class="info">
            <ul>
              <li v-for="(el,index) in item.info" :key="index">{{ el }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EstablishmentProcess",
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
  width: 100%;
  background-image: url('~@/assets/contactUs/establishmentProcess/bg@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  box-sizing: border-box;

  .title {
    padding-top: 168px;
    padding-left: 109px;
    text-align: left;
    font-size: 64px;
    font-family: "SourceHanSansSC-Bold-2";
    font-weight: bold;
    color: #24262B;
  }

  .subtitle {
    text-align: left;
    margin: 56px 0 55px 107px;
    font-size: 24px;
    font-family: "SourceHanSansSC-Bold-2";
    font-weight: bold;
    color: #24262B;

  }

  .stepBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

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
          padding: 9px 20px 11px 21px;
          line-height: 1;
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
        margin-top: 25px;
        width: 400px;
        height: 4px;
        opacity: 1;
        background-color: #2A45A7;
      }

      .name {
        margin: 31px 0;
        font-size: 24px;
        font-family: "SourceHanSansSC-Heavy-2";
        font-weight: 800;
        color: #2A45A7;
      }

      .nameInnovative {
        text-align: center;
      }

      .nameEstablishment {
        text-align: left;
      }

      .itemInnovative {
        text-align: center;
      }

      .itemEstablishment {
        text-align: left;
      }

      .info {
        width: 400px;
        font-size: 24px;
        font-family: "SourceHanSansSC-Medium-2";
        font-weight: 500;
        color: #2A45A7;
      }
    }
  }

  .stepItemInnovative {
    padding: 0 382px;
    padding-bottom: 114px;

    .stepItem {
      padding-bottom: 178px;
    }
  }

  .stepItemEstablishment {
    padding: 0 324px;
    padding-bottom: 160px;

    .stepItem {
      padding-top: 165px;
    }
  }
}
</style>
