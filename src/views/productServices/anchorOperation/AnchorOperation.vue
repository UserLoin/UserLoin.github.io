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

    <!-- 技能培养 -->
    <SkillsTaining :skillsTainingInfo="data.skillsTainingInfo"></SkillsTaining>

    <!--专业团队协助打造“爆款”短视频-->
    <PeripheralProducts :data="data.shortVideoInfo"></PeripheralProducts>

    <!-- 渠道策划 -->
    <ChannelPlanning :channelPlanningInfo="data.channelPlanningInfo"></ChannelPlanning>

    <!--周边产品运营能力-->
    <PeripheralProducts :data="data.peripheralProductsInfo"></PeripheralProducts>

  </div>

</template>

<script>
import TopPage from '../../../components/content/topPage/TopPage.vue'
import PeripheralProducts from "./childComps/PeripheralProducts.vue";
import SkillsTaining from './childComps/SkillsTaining.vue'
import ChannelPlanning from './childComps/ChannelPlanning.vue'

import data from '@/common/json/anchorOperation.js'

export default {

  components: {
    PeripheralProducts,
    TopPage,
    SkillsTaining,
    ChannelPlanning
  },
  data() {
    return {
      data: {},
      images: [
        // {imageSrc: require("@/assets/productServices/anchorOperation/kol_part1@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/anchorOperation/kol_part2@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/anchorOperation/kol_part2@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/anchorOperation/kol_part3@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/anchorOperation/kol_part4@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/anchorOperation/kol_part5@2x.jpg")},
      ]
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
    }
  }
}
</script>

<style>
.image {
  width: 100%;
}
</style>
