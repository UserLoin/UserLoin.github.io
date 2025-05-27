<template>
  <div class="container">

    <img
      v-for="(item, index) in images"
      :key="index"
      class="image"
      :src="item.imageSrc"
      mode="aspectFill"
    />

    <TopPage :content="data.topPage"></TopPage>
    <ServiceContent :serviceContentInfo="data.serviceContent"></ServiceContent>

  </div>
</template>

<script>
import TopPage from '../../../components/content/topPage/TopPage.vue'
import ServiceContent from "./childComps/ServiceContent.vue"

import data from '@/common/json/brandOperation.js'

export default {
  components: {
    ServiceContent,
    TopPage
  },
  data() {
    return {
      data: {},
      images: [
        // {imageSrc: require("@/assets/productServices/brandOperation/bo_part1@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/brandOperation/bo_part2@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/brandOperation/bo_part3@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/brandOperation/bo_part4@2x.jpg")},
        // {imageSrc: require("@/assets/productServices/brandOperation/bo_part5@2x.jpg")},
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
