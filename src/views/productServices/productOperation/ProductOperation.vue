<template>
  <div class="container">

    <img
      v-for="(item, index) in images"
      :key="index"
      class="image"
      :src="item.imageSrc"
      mode="aspectFill"
    />

    <!-- Top -->
    <TopPage :content="data.topPage"></TopPage>

    <!-- 店站运营 -->
    <SnakeTimeline :data="data.snakeTimelineInfo"></SnakeTimeline>

    <!--服务2·社交平台账号运营-->
    <SocialPlatform :data="data.socialPlatformInfo"></SocialPlatform>

    <!-- 店站运营 -->
    <LiveOperation :data="data.liveOperationInfo"></LiveOperation>

    <!--创新技术-->
    <EstablishmentProcess :data="data.innovativeTechnology"></EstablishmentProcess>

  </div>
</template>

<script>
import TopPage from '../../../components/content/topPage/TopPage.vue'
import CreatorProcess from "../../contactUs/childComps/CreatorProcess.vue";
import EstablishmentProcess from "../../contactUs/childComps/EstablishmentProcess.vue";
import SnakeTimeline from './childComps/SnakeTimeline.vue';
import SocialPlatform from "./childComps/SocialPlatform.vue";
import LiveOperation from "./childComps/LiveOperation.vue";

import data from '@/common/json/productOperation.js'

export default {
  components: {
    SocialPlatform,
    EstablishmentProcess,
    CreatorProcess,
    TopPage,
    SnakeTimeline,
    LiveOperation
   },
  data() {
    return {
      images: [
        // {imageSrc: require("@/assets/productServices/productOperation/ps_part_1@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/productOperation/ps_part_2@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/productOperation/ps_part_3@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/productOperation/ps_part_4@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/productOperation/ps_part_5@2x.jpg")},
      ],
      data: {}
    }
  },
  created() {
    this.setCurrentLanguage()
  },
  methods: {
    setCurrentLanguage() {
      const languageJson = {
        'zh-CN':data.data_CN,
        'en-US':data.data_EN,
        'ja':data.data_JA,
      }
      const languageStr = sessionStorage.getItem('currentLanguage') || 'ja'
      this.data = languageJson[languageStr]
    },
  }
}
</script>

<style>
.image {
  width: 100%; 
}
</style>
