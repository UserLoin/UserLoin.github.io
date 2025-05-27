<template>
  <div class="container">
    <img
      v-for="(item, index) in images"
      :key="index"
      class="image"
      :src="item.imageSrc"
      mode="aspectFill"
    />

    <!-- 顶部 -->
    <TopPage :content="data.topPage"></TopPage>

    <!-- 渠道方式 -->
    <Operation :operationInfo="data.operation"></Operation>

  </div>
</template>

<script>
import Operation from './childComps/operation.vue';
import TopPage from '@/components/content/topPage/TopPage.vue'
import data from '@/common/json/channelServices.js'

export default {
  components: {
    Operation,
    TopPage
  },
  data() {
    return {
      data: {},
      images: [
        // {imageSrc: require("@/assets/channelServices/cs_part1@2x.jpg")},
        // {imageSrc: require("@/assets/channelServices/cs_part2@2x.jpg")},
        // {imageSrc: require("@/assets/channelServices/cs_part3@2x.jpg")},
        // {imageSrc: require("@/assets/channelServices/cs_part4@2x.jpg")},
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
    },
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
}
</style>
