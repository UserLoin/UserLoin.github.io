<template>
  <div class="IScorllView">
    <div class="scroll-wrapper" ref="scroll">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import IScroll from 'iscroll/build/iscroll-probe'

export default {
  name: 'IScorllView',
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.iscroll.destroy()
  },
  methods: {
    rightScorllFn() {
      if (this.iscroll.x <= this.iscroll.maxScrollX) {
        return
      }
      let offsetX = -(document.documentElement.clientWidth / 1920) * 1040
      this.iscroll.scrollBy(offsetX, 0, 300, undefined)
    },
    leftScorllFn() {
      if (this.iscroll.x >= 0) {
        return
      }
      let offsetX = (document.documentElement.clientWidth / 1920) * 1040
      this.iscroll.scrollBy(offsetX, 0, 300, undefined)
    },
    init() {
      this.iscroll = new IScroll(this.$refs.scroll, {
        mouseWheel: false,
        scrollbars: false,
        probeType: 3,
        scrollX: true,
        scrollY: false,
        disablePointer: true,
        disableTouch: false,
        disableMouse: false,
        bounce: false,
        // eventPassthrough: true,
        preventDefault: false
      })
      const observer = new MutationObserver((mutationList, observer) => {
        setTimeout(() => {
          this.iscroll.refresh()
        }, 10)
      })
      const observerConfig = {
        childList: true, // 观察目标子节点的变化，增加或删除
        subtree: true, // 默认是false，设置为true，可以观察后代节点
        // attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
      }
      observer.observe(this.$refs.scroll, observerConfig)
      // observer.disconnect() // 停止观察
      this.scrolling()
    },
    scrolling() {
      this.iscroll.on('scroll', () => {
        if (parseInt(this.iscroll.x) >= 0) {
          this.$emit('changeArrow', 0)
        } else if (parseInt(this.iscroll.maxScrollX + 5) >= Math.round(this.iscroll.x)) {
          this.$emit('changeArrow', 1)
        } else {
          this.$emit('changeArrow', 2)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.IScorllView {
  .scroll-wrapper {
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
