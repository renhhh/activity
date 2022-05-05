<template>
  <div id="app">
    <audio
      ref="audio"
      src="./assets/images/audio.mp3"
      autoplay
      loop
      preload="auto"
    ></audio>
    <router-view />
  </div>
</template>
<script>
import { Dialog } from 'vant'
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.audio.play().catch((err) => {
        console.log(111, err)
        Dialog.alert({
          title: '提示',
          message: '请点击确认以加载音频文件',
        }).then(() => {
          this.$refs.audio.play()
        })
      })
    })
  },
  computed: {
    isShowBtn() {
      let route = this.$route
      const arr = ['/', '/form', '/leader-board']
      if (arr.includes(route.path)) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    goPage() {
      this.$router.push('/leader-board')
    },
  },
}
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Noto Sans SC';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  position: relative;
  // background-color: #e74143;
  color: #fff;
  .err {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 50px;
  }
  .dialog-btn-pai {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 130px;
    width: 60px;
    height: 50px;
    border-radius: 10px 0 0 10px;
    border-right: none;
    background: #098d66;
    text-align: center;
    font-size: 14px;
  }
}
</style>
