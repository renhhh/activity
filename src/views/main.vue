<template>
  <div class="main">
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="info-o" to="/rule">规则</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <div class="content">
      <img
        @click="clickIcon"
        src="../assets/images/main/1.png"
        alt="1"
        class="img-1"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/2.png"
        alt="1"
        class="img-2"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/3.png"
        alt="1"
        class="img-3"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/4.png"
        alt="1"
        class="img-4"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/5.png"
        alt="1"
        class="img-5"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/6.png"
        alt="1"
        class="img-6"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/7.png"
        alt="1"
        class="img-7"
      />
      <!-- 2 -->
      <img
        @click="clickIcon"
        src="../assets/images/main/1.png"
        alt="1"
        class="img-8"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/2.png"
        alt="1"
        class="img-9"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/3.png"
        alt="1"
        class="img-10"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/4.png"
        alt="1"
        class="img-11"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/5.png"
        alt="1"
        class="img-12"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/6.png"
        alt="1"
        class="img-13"
      />
      <img
        @click="clickIcon"
        src="../assets/images/main/7.png"
        alt="1"
        class="img-14"
      />
    </div>
    <div class="present-line">
      <div class="icon-box">
        <div
          v-for="item of 10"
          :class="[levelMap(level) == item ? 'current-icon' : 'other-icon']"
          :key="item"
          @click="clickItem(item)"
        ></div>
      </div>
      <div class="line">
        <div :style="{ height: process }" class="inner-line">
          <span class="invote-person">{{ current.invitUserNum }}</span>
        </div>
        <div class="kedu">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="tips">
          <div>188</div>
          <div>88</div>
          <div>68</div>
          <div>58</div>
          <div>36</div>
          <div>28</div>
          <div>18</div>
          <div>8</div>
          <div>5</div>
          <div>3</div>
        </div>
      </div>
    </div>
    <img
      src="../assets/images/main/kefu.png"
      alt="客服"
      class="kefu"
      @click="show = true"
    />
    <van-dialog v-model="show" title="请截图扫描客服二维码" width="240px">
      <img
        src="../assets/images/main/kefu-code.jpg"
        alt="二维码"
        class="kefu-code"
      />
    </van-dialog>
  </div>
</template>

<script>
import axios from '../assets/js/axios'
import { Dialog } from 'vant'
export default {
  name: 'Main',
  data() {
    return {
      active: 3,
      mobile: sessionStorage.getItem('mobile'),
      current: {},
      show: false,
    }
  },
  computed: {
    level() {
      let count = this.current.invitUserNum
      if (count < 3) {
        return 0
      } else if (count == 3) {
        return 1
      } else if (count < 5) {
        return 1
      } else if (count == 5) {
        return 2
      } else if (count < 8) {
        return 2
      } else if (count == 8) {
        return 3
      } else if (count < 18) {
        return 3
      } else if (count == 18) {
        return 4
      } else if (count < 28) {
        return 4
      } else if (count == 28) {
        return 5
      } else if (count < 36) {
        return 5
      } else if (count == 36) {
        return 6
      } else if (count < 58) {
        return 6
      } else if (count == 58) {
        return 7
      } else if (count < 68) {
        return 7
      } else if (count == 68) {
        return 8
      } else if (count < 88) {
        return 8
      } else if (count == 88) {
        return 9
      } else if (count < 188) {
        return 9
      } else {
        return 10
      }
    },
    process() {
      let count = this.current.invitUserNum
      if (count == 0) {
        return '0'
      }
      if (count < 3) {
        return '5%'
      } else if (count == 3) {
        return '10%'
      } else if (count < 5) {
        return '15%'
      } else if (count == 5) {
        return '20%'
      } else if (count < 8) {
        return '25%'
      } else if (count == 8) {
        return '30%'
      } else if (count < 18) {
        return '35%'
      } else if (count == 18) {
        return '40%'
      } else if (count < 28) {
        return '45%'
      } else if (count == 28) {
        return '50%'
      } else if (count < 36) {
        return '55%'
      } else if (count == 36) {
        return '60%'
      } else if (count < 58) {
        return '65%'
      } else if (count == 58) {
        return '70%'
      } else if (count < 68) {
        return '75%'
      } else if (count == 68) {
        return '80%'
      } else if (count < 88) {
        return '85%'
      } else if (count == 88) {
        return '90%'
      } else if (count < 188) {
        return '95%'
      } else {
        return '100%'
      }
    },
  },
  created() {
    this.getLotteryCount()
  },
  mounted() {
    this.$nextTick(() => {
      Dialog.alert({
        title: '提示',
        message: '请左右滑动页面点击里面的石头、花草、燕子等元素开始寻宝吧！',
        // theme: 'round-button',
      }).then(() => {
        // on close
      })
    })
  },
  methods: {
    levelMap(level) {
      const map = {
        1: 10,
        2: 9,
        3: 8,
        4: 7,
        5: 6,
        6: 5,
        7: 4,
        8: 3,
        9: 2,
        10: 1,
      }
      return map[level]
    },
    clickItem(item) {
      console.log('item', item)
      if (item != this.levelMap(this.level)) {
        return
      }
      const map = {
        1: 10,
        2: 9,
        3: 8,
        4: 7,
        5: 6,
        6: 5,
        7: 4,
        8: 3,
        9: 2,
        10: 1,
      }
      let val = map[item]
      this.$router.push({
        path: '/list',
        query: {
          level: val,
          num: this.current.invitUserNum,
        },
      })
    },
    getLotteryCount() {
      return new Promise((resolve, reject) => {
        axios
          .post('/User/savesdgq', {
            f_Mobile: this.mobile,
          })
          .then((res) => {
            const { data } = res
            this.current = data.data
            console.log('res', res)
            resolve(data.data.hasNum)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    clickIcon() {
      axios
        .post('/User/savesdgq', {
          // f_Mobile: this.route.query.f_Mobile
          f_Mobile: this.mobile,
        })
        .then((res) => {
          const { data } = res
          console.log('res', res)
          let hasNum = data.data.hasNum
          if (hasNum == 0) {
            this.$router.push({
              path: '/not-chance',
            })
          } else {
            this.$router.push({
              path: '/chance',
              query: {
                num: hasNum,
              },
            })
          }
        })
    },
  },
}
</script>
<style lang="scss">
.main {
  .van-dialog__header {
    color: #337966;
  }
  .van-dialog__content {
    text-align: center;
  }
}
</style>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  .content {
    position: relative;
    width: 1000px;
    height: 100%;
    background: url('../assets/images/main/gamebg.png') no-repeat center center;
    background-size: 1000px 116%;
    > img {
      position: absolute;
    }
    .img-1 {
      bottom: 30px;
      left: 100px;
    }
    .img-2 {
      bottom: 214px;
      left: 46px;
    }
    .img-3 {
      bottom: 235px;
      left: 150px;
    }
    .img-4 {
      bottom: 235px;
      left: 330px;
    }
    .img-5 {
      top: 235px;
      left: 132px;
    }
    .img-6 {
      top: 200px;
      left: 268px;
    }
    .img-7 {
      bottom: 140px;
      left: 268px;
    }
    .img-8 {
      bottom: 46px;
      left: 500px;
    }
    .img-9 {
      bottom: 196px;
      left: 500px;
    }
    .img-10 {
      bottom: 202px;
      left: 609px;
    }
    .img-11 {
      bottom: 122px;
      right: 160px;
    }
    .img-12 {
      bottom: 429px;
      right: 442px;
    }
    .img-13 {
      bottom: 406px;
      right: 171px;
    }
    .img-14 {
      bottom: 262px;
      right: 101px;
    }
  }
  .kefu {
    position: fixed;
    left: 16px;
    top: 34px;
    width: 40px;
  }
  .kefu-code {
    width: 140px;
    height: 140px;
  }
  .present-line {
    display: flex;
    position: fixed;
    right: 34px;
    top: 54px;
    bottom: 100px;
    width: 104px;
    z-index: 30;
    .line {
      position: relative;
      display: flex;
      // flex-direction: column;
      // justify-content: end;
      height: 100%;
      width: 33px;
      background: #d9d9d9;
      border-radius: 24px;
      box-sizing: border-box;
      padding: 4px;
      .kedu {
        position: absolute;
        z-index: 20;
        top: 4px;
        bottom: 4px;
        left: 4px;
        right: 4px;
        border-radius: 24px;
        box-sizing: border-box;
        > div {
          width: 100%;
          height: 10%;
          border-bottom: 1px dashed #fff;
        }
        & > div:last-child {
          border: none;
        }
        & > div:first-child {
          border-top: 1px dashed #fff;
          // border-radius: 24px 24px 0 0;
        }
      }

      .tips {
        position: absolute;
        z-index: 20;
        top: -3px;
        bottom: 4px;
        border-radius: 24px;
        box-sizing: border-box;
        left: 38px;
        width: 22px;
        color: #226f5b;
        > div {
          width: 100%;
          height: 10%;
          font-weight: bold;
        }
      }
    }
    .inner-line {
      position: absolute;
      bottom: 2px;
      width: 24px;
      background: linear-gradient(#226f5b, #629488);
      border-radius: 24px;
      text-align: center;
      .invote-person {
        display: inline-block;
        position: absolute;
        top: -14px;
        left: -5px;
        font-size: 12px;
        color: #000;
        text-align: center;
        width: 33px;
      }
    }
    .icon-box {
      height: 100%;
      width: 66px;
      margin-top: -20px;

      .current-icon {
        width: 100%;
        height: 10%;
        background: url('../assets/images/main/icon.png') no-repeat center
          center;
        background-size: 70% 90%;
      }
      .other-icon {
        width: 100%;
        height: 10%;
        background: url('../assets/images/main/other.png') no-repeat center
          center;
        background-size: 70% 90%;
      }
    }
  }
}
</style>
