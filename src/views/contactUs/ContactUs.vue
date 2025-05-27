<template>
  <div class="container">

    <img
      v-for="(item, index) in images"
      :key="index"
      class="image"
      :src="item.imageSrc"
      mode="aspectFill"
    />

    <!--top页-->
    <TopPage :content="data.topPage"></TopPage>

    <!--公司信息-->
    <CompanyInfo :companyInfo="data.company"></CompanyInfo>

    <!--创作者注册流程-->
    <CreatorProcess :creatorProcessInfo="data.creatorProcess"></CreatorProcess>

    <!--成立前的流程-->
    <EstablishmentProcess :data="data.establishmentProcess"></EstablishmentProcess>

    <!--联系方式-->
    <ContactInfo :contactInfo="data.contact"></ContactInfo>

    <!--常见问题-->
    <QuestionAndAnswer :questionAndAnswerInfo="data.questionAndAnswer"></QuestionAndAnswer>

  </div>

</template>

<script>
import ContactInfo from "./childComps/ContactInfo.vue";
import QuestionAndAnswer from './childComps/QuestionAndAnswer.vue';
import CompanyInfo from "./childComps/CompanyInfo.vue"
import CreatorProcess from "./childComps/CreatorProcess.vue"
import EstablishmentProcess from "./childComps/EstablishmentProcess.vue"
import TopPage from '@/components/content/topPage/TopPage.vue'
import data from '@/common/json/contactUs.js'

export default {
  components: {
    ContactInfo,
    QuestionAndAnswer,
    CompanyInfo,
    CreatorProcess,
    EstablishmentProcess,
    TopPage
  },
  data() {
    return {
      data: {},
      images: [
        // {imageSrc: require("@/assets/contactUs/contact1@2x.jpg")},
        // {imageSrc: require("@/assets/contactUs/contact2@2x.jpg")},
        // {imageSrc: require("@/assets/contactUs/contact3@2x.jpg")},
        // {imageSrc: require("@/assets/contactUs/contact4@2x.jpg")},
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
      console.log(languageJson)
      const languageStr = sessionStorage.getItem('currentLanguage') || 'ja'
      this.data = languageJson[languageStr]
    },
  }
}
</script>

<style scoped>

.image {
  width: 100%;
}

</style>
