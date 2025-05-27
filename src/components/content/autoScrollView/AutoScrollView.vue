<template>
  <div class="container">
      <div>
        <vue-seamless-scroll
          :data="listData"
          :class-option="classOption"
          class="warp"
          autoPlay
          :limitMoveNum="1"
          :hoverStop="false"
        >
          <ul class="item">
            <li v-for="(item, index) in listData" :key="index">
              <img class="image" :src="item.imageSrc">
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
      <div>
        <vue-seamless-scroll
          :data="listData1"
          :class-option="classOption1"
          class="warp"
          autoPlay
          :limitMoveNum="1"
          :hoverStop="false"
        >
          <ul class="item">
            <li v-for="(item, index) in listData1" :key="index">
              <img class="image" :src="item.imageSrc">
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>


  </div>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    name: "AutoScrollView",
    components: {
    vueSeamlessScroll
    },
    data() {
      return {
        listData: [
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_handsome_male_model_white_background_bright__134dc224-ae3f-4c52-8a34-eaa949f3e1a1.png")},
        {imageSrc:  require("@/assets/homepage/charles59_None_0ea01b46-b03a-4ea2-a6e7-e05851e367fa.png")},
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_cute_model_white_background_bright_photoclea_1af5af08-7e18-4bfb-909c-1a0e6f4ed712.png")},
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_handsome_male_model_white_background_bright__134dc224-ae3f-4c52-8a34-eaa949f3e1a1.png")},
        {imageSrc:  require("@/assets/homepage/charles59_None_0ea01b46-b03a-4ea2-a6e7-e05851e367fa.png")},
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_cute_model_white_background_bright_photoclea_1af5af08-7e18-4bfb-909c-1a0e6f4ed712.png")},
      ],
      listData1: [
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_young_fashion_model_white_background_bright__c32f9853-a071-4234-aabf-9b6a79d5fb2b.png")},
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_young_fashion_model_white_background_bright__ffa2e8b4-e40c-4e56-ba1d-1fa33c7f068f.png")},
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_handsome_male_model_white_background_bright__267bea28-0974-414c-b2d2-61e6f5455aa9.png")},
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_young_fashion_model_white_background_bright__c32f9853-a071-4234-aabf-9b6a79d5fb2b.png")},
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_young_fashion_model_white_background_bright__ffa2e8b4-e40c-4e56-ba1d-1fa33c7f068f.png")},
        {imageSrc:  require("@/assets/homepage/charles59_Japanese_handsome_male_model_white_background_bright__267bea28-0974-414c-b2d2-61e6f5455aa9.png")},
      ],
        classOption: {
          direction: 0,
          hoverStop: false
        },
        classOption1: {
          direction: 1,
          hoverStop: false
        },
      }

    }
  }
</script>

<style lang="scss" scoped>
  .warp {
    height: 100%;
    max-height: 100%;
    width: 360px;
    margin: 0 auto;
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;

     li,
      a {
        display: block;
        font-size: 15px;
      }


  .image {
    width: 308px;
    height: 416px;
    margin-bottom: 24px;
    margin-right: 32px;
    border-radius: 40px;
  }

    }
  }
  .container {
    background: transparent !important;
    display: flex;
    // flex-direction: column;
    align-items: space-between !important;
    justify-content: center;
    padding: 0 0 148px 0;
  }
  .logo {
    width: 609px;
    height: 113px;
  }
  .follow_us {
    padding: 83px 0 76px 0;
    font-size: 32px;
    font-family: "SourceHanSansSC-Medium-2";
    font-weight: 500;
    color: #18245D;
  }
  .share {
    display: flex;
    justify-content: space-between;
  }


</style>
