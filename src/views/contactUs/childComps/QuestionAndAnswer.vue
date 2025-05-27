<template>
  <div class="container">
    <div class="containerTitle">{{ questionAndAnswerInfo.title }}</div>
    <div class="containerType" >
      <div class="buttonBg">
        <button class="buttonType" @click="changeType(index)" v-for="(item, index) in questionType" :key="index"  :class="{'isActive': selectIndex == index}">{{ item }}</button>
      </div>
    </div>
    <div class="questionBlock" v-for="(item, index) in question" :key="index" >
      <div class="question">
        <div class="leftQuestin">
          <img class="iconQ" :src="icon1"/><p class="questionDetail">{{ item.question }}</p>
        </div>
        <div @click="chooseAnswer(index)">
          <img v-if="checkedQueston !== index" class="iconDown" :src="iconDown"/>
          <img v-else class="iconDown" :src="iconUp"/>
        </div>
      </div>
      <div v-if="checkedQueston === index" class="answer">
        <p class="answerDetail">{{ item.answer }}</p> 
        <img class="iconAnswer" :src="answer"/>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import icon1 from  '@/assets/contactUs/questionAndAnswer/icon_question.png'
import iconDown from '@/assets/contactUs/questionAndAnswer/icon_arrow_downside.png'
import iconUp from '@/assets/contactUs/questionAndAnswer/icon_arrow_upside.png'
import answer from '@/assets/contactUs/questionAndAnswer/icon_answer.png'
export default {
  name: 'QuestionAndAnswer',
  props: {
    questionAndAnswerInfo: {
      type: Object, defaults() {
        return {}
      }
    }
  },
  data () {
    return {
      questionType: [],
      selectIndex: 0,
      checkedQueston:null,
      icon1:icon1,
      iconDown:iconDown,
      iconUp:iconUp,
      answer:answer,
      question: []
    }
  },
  created() {
    this.questionType = this.questionAndAnswerInfo.cityOption
    this.changeType(0)
  },
  methods: {
    changeType(index){
      this.selectIndex = index
      this.checkedQueston = null
      if(index === 0){
        this.question = this.questionAndAnswerInfo.proxyQuestion
      }else{
        this.question = this.questionAndAnswerInfo.createQuestion
      }
    },
    chooseAnswer(index){
      if(this.checkedQueston !== index){
        this.checkedQueston = index
      }else{
        this.checkedQueston = null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    border-top: #FFFFFF solid 4px;
    width: 100%;
    background: #2A45A7;
    padding: 159px 0 160px 118px;
    box-sizing: border-box;

    .containerTitle{
      height: 64px;
      font-size: 64px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #FFFFFF;
      text-align: left;
    }

    .containerType{
      margin-top: 120px;
      font-size: 24px;
      font-family: "SourceHanSansSC-Medium-2";
      font-weight: 500;
      color: #404147;
      box-sizing: border-box;
      border: none;
      overflow: hidden;
      margin-bottom: 74px;
      text-align: left;

      .buttonBg {
        display: inline-block;
        border-radius: 50px;
        overflow: hidden;
      }

      .buttonType{
        padding: 26px 58px;
        box-shadow: 0px 3px 9px 1px rgba(0,0,0,0.1);
        opacity: 1;
        box-sizing: border-box;
        border: none;
        font-size: 24px;
        font-family: "SourceHanSansSC-Medium-2";
        font-weight: 500;
        color: #404147;
        background: #FFFFFF;

        &:hover {
          cursor: pointer;
        }
       }

      .isActive{
        background: #EAFF74;
        box-shadow: 0px 3px 9px 1px rgba(0,0,0,0.1);
        opacity: 1;
        box-sizing: border-box;
        border: none;
      }
    }

    .questionBlock{
      width: 1535px;
      padding-top: 40px;
      padding-bottom: 41px;
      border-bottom: 1px solid #174199;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .question{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .leftQuestin{
        width: 1200px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .iconQ{
          width: 97px;
          height: 97px;
          opacity: 1;
        }

        .questionDetail{
          padding-left: 32px;
          font-size: 24px;
          font-family: "SourceHanSansSC-Bold-2";
          font-weight: bold;
          color: #FFFFFF;
          text-align: left;
          // -webkit-line-clamp: 2;
          // text-overflow: ellipsis;
          // overflow:hidden;
          // display: -webkit-box;
          // -webkit-box-orient: vertical;
          white-space: pre-line; // 合并空白符序列，但保留换行符
        }
      }

      .iconDown{
        width: 48px;
        height: 35px;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .answer{
      min-width: 625px;
      // height: 141px;
      padding: 40px;
      background: #FFFFFF;
      border-radius: 48px 48px 8px 48px;
      opacity: 1;
      border: 1px solid #707070;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      margin-top: 30px;
      margin-left: 97px;
      margin-right: 197px;

      .iconAnswer{
          width: 97px;
          height: 97px;
          opacity: 1;
          padding-left: 40px;
        }

        .answerDetail{
          // height: 65px;
          font-size: 24px;
          font-family: "SourceHanSansSC-Bold-2";
          font-weight: bold;
          color: #2A45A7;
          text-align: left;
          // -webkit-line-clamp: 2;
          // text-overflow: ellipsis;
          // overflow:hidden;
          // display: -webkit-box;
          // -webkit-box-orient: vertical;
          white-space: pre-line; // 合并空白符序列，但保留换行符
        }
    }
  }
</style>
