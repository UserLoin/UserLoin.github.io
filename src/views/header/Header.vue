<template>
  <div class="container">

    <!-- 页面模块 -->
    <div class="itemBg" ref="headerItembg" :style="{borderTopLeftRadius: headerItembgRadius + 'px',borderBottomLeftRadius: headerItembgRadius + 'px'}">
      <div
        class="item"
        :class="{active:(index == chooseServiceIndex)}"
        :id= "`chooseServiceIndexID${index}`"
        @click="itemAction(item,index)"
        v-for="(item, index) in data.titles"
        :key="index">
        {{ item.name }}
      </div>
      <div class="itemLanguage" @click="languageAction">
        <div class="language"> {{ currentLanguageSign }}</div>
        <img class="arrow" :src="data.src.arrowTop" alt="">
      </div>
    </div>

    <!-- 产品服务模块 -->
    <transition name="run">
      <div class="serviceBg" v-if="isServiceShow">
        <div class="title">
          <div>{{  data.service.title }}</div>
        </div>
        <div class="serviceItemBg">
          <div
            class="item"
            v-for="(item, index) in data.service.serviceTitles"
            :key="index"
            @click="serviceItemAction(item)">
            <div>{{ item.name }}</div>
            <img :src="data.src.arrowBlue" alt="">
          </div>
        </div>
      </div>
    </transition>

    <!-- 切换语言 -->
    <transition name="language">
      <div class="languageBg" v-if="isLanguageShow">
        <div class="languageItemBg">
          <div class="title">
            {{ data.language.title }}
          </div>
          <div
            class="item"
            :class="{languageActive:(index == chooseLanguageIndex)}"
            v-for="(item, index) in data.language.languageTitles"
            :key="index"
            @click="languageItemAction(item, index)">
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import data from '@/common/json/header.js'
  export default {
    computed: {
      currentLanguageSign() {
         const languageStr = sessionStorage.getItem('currentLanguage') || 'ja'
         const languageJson = this.data.language.languageTitles.find(item => item.type === languageStr)
         return languageJson.nameSign
      }
    },
    name: "Header",
    data() {
      return {
        data: {},
        isServiceShow: false,
        chooseServiceIndex: 0,
        isLanguageShow: false,
        chooseLanguageIndex: 0,
        headerItembgRadius: 40
      }
    },
    created() {
      this.setCurrentLanguage()
      this.setServiceIndex()
    },
    methods: {

      setServiceIndex() {
        const currentIndex = sessionStorage.getItem('serviceIndex') || 0
        this.chooseServiceIndex = currentIndex
      },

      setCurrentLanguage() {
        const languageJson = {
          'zh-CN':data.data_CN,
          'en-US':data.data_EN,
          'ja':data.data_JA,
        }

        const languageStr = sessionStorage.getItem('currentLanguage') || 'ja'
        this.data = languageJson[languageStr]
        const language = this.data.language.languageTitles.find(item => item.type === languageStr)
        this.chooseLanguageIndex = language.index
      },

      itemAction(item,index) {
        document.getElementById('chooseServiceIndexID3').className = "item"

        this.isLanguageShow = false
        this.chooseServiceIndex = index
        sessionStorage.setItem('serviceIndex', index)

        if(item.path) {
          this.isServiceShow = false
          this.$router.push({
            path: item.path,
          })
        } else {
          setTimeout(() => {
            this.isServiceShow = !this.isServiceShow
          }, 400);
        }
      },

      serviceItemAction(item) {
        this.isServiceShow = false
        this.$router.push({
          path: item.path,
        })
      },

      languageAction() {
        this.isServiceShow = false
        
        if (this.isLanguageShow === true) {
          return
        }
        
        setTimeout(() => {
          console.log('setTimeout')
          this.isLanguageShow = true
        }, 400);
      },

      languageItemAction(item, index) {
        this.isLanguageShow = false
        this.chooseLanguageIndex = index
        sessionStorage.setItem('currentLanguage', item.type)
        location.reload()
        // this.$router.go(0)
      },

      bodyCloseMenus(e) {
        
        if (e.target.className === "serviceBg" ||
            e.target.className === "languageItemBg") {
          return
        }

        if (this.isServiceShow == true) {
          this.isServiceShow = false
        }
        if (this.isLanguageShow == true) {
          this.isLanguageShow = false
        }
      }
    },
    mounted() {
      document.addEventListener("click", this.bodyCloseMenus);
      const h = this.$refs.headerItembg.offsetHeight
      this.headerItembgRadius = h/2
    },
    beforeDestroy() {
      document.removeEventListener("click", this.bodyCloseMenus);
    },
  }
</script>

<style lang="scss" scoped>

  .container {
    /* 元素开始进入的状态 | 元素离开结束的状态 */
    .run-enter-from,
    .run-leave-to {
      opacity: 0;
    }
    /* 元素进入结束的状态 ｜ 元素开始离开的状态。     这里不写也可以！！！！！！ */
    .run-enter-to,
    .run-leave-from {
      opacity: 1;
    }
    /* 元素进入 ｜ 结束时，过渡的效果 */
    .run-enter-active,
    .run-leave-active {
      /* 过渡动画的使用 */
      transition: opacity 0.35s linear 0s;
    }
  }

  .container {
    /* 元素开始进入的状态 | 元素离开结束的状态 */
    .language-enter-from,
    .language-leave-to {
      opacity: 0;
    }
    /* 元素进入结束的状态 ｜ 元素开始离开的状态。     这里不写也可以！！！！！！ */
    .language-enter-to,
    .language-leave-from {
      opacity: 1;
    }
    /* 元素进入 ｜ 结束时，过渡的效果 */
    .language-enter-active,
    .language-leave-active {
      /* 过渡动画的使用 */
      transition: opacity 0.35s linear 0s;
    }
  }

  .container {
    max-width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: none;
  }

  .itemBg {
    width: 100%;
    padding: 26px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 3px 9px 1px rgba(0,0,0,0.1);
    // border-radius: 40px 0px 0px 40px;
    // border-top-left-radius: 10px 50%;

    .item {
      font-size: 24px;
      font-family: "SourceHanSansSC-Medium-2";
      font-weight: 500;
      color: rgba(24, 36, 93, 0.4);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 72px;

      &:hover {
        cursor: pointer;
      }
    }

    :nth-child(4) {
      color: #E43363;
    }

    .active{
      color: #2A45A7;
    }

    .itemLanguage {
      display: flex;
      align-items: center;
      padding: 0 72px;
      
      &:hover {
        cursor: pointer;
      }

      .language {
        font-size: 20px;
        font-family: "SourceHanSansSC-Medium-2";
        font-weight: 500;
        color: #2A45A7;
        border-radius: 8px;
        border: 2px solid #2A45A7;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px 10px;
        min-width: 32px;
        box-sizing: border-box;
      }

      .arrow {
        margin-left: 12px;
        width: 15px;
        height: 11px;
      }
    }
  }

  .serviceBg {
    padding-right: 56px;
    background-color: #E8EEFC;
    border-radius: 0px 0px 99px 99px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;

    .title {
      padding: 0 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 48px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;
      color: #2A45A7;
    }

    .serviceItemBg {
      padding: 82px 0;
      
      .item {
        padding: 40px 0;
        width: 347px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        font-family: "SourceHanSansSC-Bold-2";
        font-weight: bold;
        color: #2A45A7;
        border-top: 2px solid #2A45A7;

        img {
          width: 47px;
          height: 47px;
        }

        &:hover {
          color: rgba(42, 69, 167, 0.5);
          cursor: pointer;
        }
      }

      .item:last-child {
        border-bottom: 2px solid #2A45A7;
      }
    }

    
  }

  .languageBg {

    .languageItemBg {
      background-color: #E8EEFC;
      padding: 60px 38px;
      border-radius: 0px 0px 24px 24px;
      display: flex;
      flex-direction: column;
      font-size: 24px;
      font-family: "SourceHanSansSC-Bold-2";
      font-weight: bold;

      .title {
        padding-bottom: 20px;
        border-bottom: 2px solid #2A45A7;
        padding-left: 8px;
        box-sizing: border-box;
        color: #2A45A7;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .item {
        padding:40px 0 40px 8px ;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: rgba(36, 38, 43, 0.4);
        border-bottom: 2px solid #2A45A7;

        &:hover {
          color: rgba(42, 69, 167, 0.5) !important;
          cursor: pointer;
        }
      }

      .languageActive{
        color: #2A45A7 !important;
      }
    }
  }
</style>
