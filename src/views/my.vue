<template>
  <div class="my-box">
    <div class="name">{{ form.RealName }}</div>
    <div class="common-border top-box">
      <div class="right-border">
        <div class="value">{{ form.InvitUserNum }}人</div>
        <div class="mt-10">邀请人数</div>
      </div>
      <div class="right-border">
        <div class="value">{{ form.CouponNum }}张</div>
        <div class="mt-10">优惠券</div>
      </div>
      <div>
        <div class="cerset">
          <input
            id="copy"
            class="value copyBtn input-hidden"
            v-model="cerect"
          />
          <span>{{ cerect }}</span>
          <span
            data-clipboard-target="#copy"
            class="copy-btn"
            @click="copy"
          ></span>
        </div>
        <div class="mt-10">宝藏密钥</div>
      </div>
    </div>
    <div class="common-border center-box mb-20">
      <div class="card-top">
        <img class="juan-left" src="../assets/images/my/juan.png" alt="" />
        <span class="my-title">我的优惠券</span>
        <!-- <span class="jd-title">京东购物平台优惠券</span> -->
      </div>
      <div class="juan-box">
        <div class="not-data" v-if="!form.CouponList.length">暂无</div>

        <div
          v-else
          class="juan-item"
          v-for="(item, index) of form.CouponList"
          :key="index"
        >
          <div>
            <div class="mb-4">¥{{ item.F_DiscountMoney }}</div>
            <div style="font-size: 12px">满{{ item.F_DiscountUse }}元使用</div>
          </div>
          <div class="center-coupon">
            <div class="mb-4">{{ item.F_CouponName }}购物</div>
            <div style="font-size: 12px">平台优惠券</div>
          </div>
          <div class="read-btn" @click="clickReadJuan(item)">查看</div>
        </div>
      </div>
    </div>
    <div class="common-border center-box">
      <div class="card-top">
        <img class="lipin-left" src="../assets/images/my/present.png" alt="" />
        <span class="my-title">我的试用品</span>
      </div>
      <!-- presents form.GiftList-->
      <div class="present-box">
        <div class="not-data" v-if="!form.GiftList.length">暂无</div>

        <div
          v-else
          class="present-item"
          v-for="(item, index) of form.GiftList"
          :key="index"
        >
          <div class="present-img" :class="`img-${item.F_Level}`"></div>
          <div style="flex: 1" class="present-desc">
            <div class="introduce">
              <div class="introduce-name">{{ item.F_CouponName }}</div>
              <div>¥{{ item.F_Price }}</div>
            </div>
            <div v-if="item.F_CanExchange && !item.F_GiftStatus" class="lingqu">
              <span @click="goAdreessPage(item.F_Level)">领 取</span>
            </div>
            <div v-else-if="!item.F_CanExchange" class="yilingqu">
              <span>不可</span><br ><span>领取</span>
            </div>
            <div v-else class="yilingqu">
              <span>已领取</span>
            </div>
            <!-- <div v-else class="lingqu">
              <span @click="goAdreessPage(item.F_Level)">领 取</span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="btn-box">
      <span class="btn" @click="goMain">返回寻宝</span>
    </div>
    <van-dialog v-model="show" title="优惠卷">
      <img :src="url" alt="" class="juan-img" />
    </van-dialog>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'
import { Toast } from 'vant'
import axios from '../assets/js/axios'

export default {
  name: 'My',
  data() {
    return {
      cerect: sessionStorage.getItem('invitCode'),
      mobile: sessionStorage.getItem('mobile'),
      url: require('../assets/images/my/juan/1.png'),
      juanList: {
        1: require('../assets/images/my/juan/1.png'),
        2: require('../assets/images/my/juan/2.png'),
        3: require('../assets/images/my/juan/3.png'),
        4: require('../assets/images/my/juan/4.png'),
        5: require('../assets/images/my/juan/5.png'),
        6: require('../assets/images/my/juan/6.png'),
        7: require('../assets/images/my/juan/7.png'),
        8: require('../assets/images/my/juan/8.png'),
        9: require('../assets/images/my/juan/9.png'),
        10: require('../assets/images/my/juan/10.png'),
      },
      form: {
        CouponList: [],
        GiftList: [],
      },
      show: false,
      presents: [
        { level: 1, name: '卷尺', price: '10.9' },
        { level: 2, name: '卷尺', price: '10.9' },
        { level: 3, name: '卷尺', price: '10.9' },
        { level: 4, name: '卷尺', price: '10.9' },
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      axios
        .get('/LuckyDraw/MyDetail', {
          params: {
            mobile: this.mobile,
          },
        })
        .then((res) => {
          const { data } = res
          console.log('data', data.data)
          this.form = data.data
        })
    },
    goAdreessPage(level) {
      this.$router.push({
        path: '/address',
        query: {
          level,
        },
      })
    },
    copy() {
      // 创建一个新的ClipboardJS('.copyBtn'),()内为按钮的class
      var copyBtn = new ClipboardJS('.copy-btn')
      copyBtn.on('success', (e) => {
        Toast.success('复制成功')

        copyBtn.destroy() // 释放内存
      })
    },
    goMain() {
      this.$router.push('/main')
    },
    clickReadJuan(item) {
      let level = item.F_Level || '1'
      this.url = this.juanList[level]
      this.show = true
    },
  },
}
</script>

<style lang="scss">
.my-box {
  .van-dialog__content {
    text-align: center;
  }
}
</style>
<style lang="scss" scoped>
.my-box {
  width: 100%;
  height: 100%;
  background: url('../assets/images/my/bg.png') no-repeat center center;
  background-size: 100% 100%;
  color: #000;
  box-sizing: border-box;
  padding: 88px 40px 20px;
  overflow: scroll;
  .cerset {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .juan-img {
    width: 200px;
    height: 200px;
  }
  .input-hidden {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0 !important;
  }
  .copy-btn {
    width: 20px;
    height: 20px;
    background: url('../assets/images/my/copy.png') no-repeat center center;
    background-size: 100% 100%;
    margin-left: 8px;
  }
  .name {
    text-align: center;
    font-size: 26px;
    color: #fff;
    font-weight: bold;
  }
  .not-data {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 22px;
  }
  .top-box {
    box-sizing: border-box;
    display: flex;
    background: #fff;
    padding: 20px 10px;
    margin: 10px 0;
    > div {
      width: 33%;
      text-align: center;
    }
    .right-border {
      border-right: 1px solid #ccc;
    }
    .mt-10 {
      margin-top: 10px;
    }
    .value {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .mb-20 {
    margin-bottom: 20px;
  }

  .center-box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: #fff;
    padding: 20px 10px 0;
    box-sizing: border-box;
    min-height: 136px;
    max-height: 200px;
    overflow: hidden;
    .card-top {
      display: flex;
      align-items: center;
      height: 22px;
    }
    .juan-box {
      flex: 1;
      margin-top: 12px;
      padding: 0 12px;
      overflow: scroll;

      .juan-item {
        background: url('../assets/images/my/juan-card.png') no-repeat center
          center;
        background-size: 100% 100%;
        height: 56px;
        padding: 0 20px;
        box-sizing: border-box;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        color: #fff;
        .center-coupon {
          box-sizing: border-box;
          padding-left: 20px;
          flex: 1;
        }
        .read-btn {
          width: 40px;
        }
        .mb-4 {
          margin-bottom: 4px;
        }
      }
    }
    .present-desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .introduce {
      margin-left: 12px;
      color: #fff;
      .introduce-name {
        margin-bottom: 8px;
        font-size: 12px;
        font-weight: bold;
      }
    }
    .present-box {
      flex: 1;
      margin-top: 12px;
      padding: 0 12px;
      overflow: scroll;

      .present-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: url('../assets/images/my/present-item.png') no-repeat center
          center;
        background-size: 100% 100%;
        height: 98px;
        padding: 8px 14px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .present-img {
          height: 100%;
          width: 92px;
        }
        .img-1 {
          background: url('../assets/images/my/1.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .img-2 {
          background: url('../assets/images/my/2.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .img-3 {
          background: url('../assets/images/my/3.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .img-4 {
          background: url('../assets/images/my/4.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .img-5 {
          background: url('../assets/images/my/5.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .img-6 {
          background: url('../assets/images/my/6.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .img-7 {
          background: url('../assets/images/my/7.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .img-8 {
          background: url('../assets/images/my/8.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .img-9 {
          background: url('../assets/images/my/9.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .img-10 {
          background: url('../assets/images/my/10.png') no-repeat center center;
          background-size: 100% 100%;
        }
        .lingqu {
          width: 74px;
          height: 30px;
          line-height: 30px;
          background: #fff;
          color: #005b43;
          border-radius: 12px;
          text-align: center;
          margin-right: 12px;
          span {
            font-weight: bold;
          }
        }
        .yilingqu {
          width: 74px;
          height: 30px;
          // line-height: 30px;
          color: #fff;
          text-align: center;
          margin-right: 12px;
          span {
            font-weight: bold;
          }
        }
      }
    }
    .juan-left {
      width: 32px;
    }
    .lipin-left {
      width: 28px;
    }
    .my-title {
      display: inline-block;
      font-weight: bold;
      margin: 0 12px 0 8px;
      font-size: 20px;
    }
    .jd-title {
      color: #676767;
      font-size: 14px;
    }
  }
  .invote {
    padding: 18px 38px;
    background: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  .common-border {
    border-radius: 14px;
  }
  .common-font {
    font-size: 24px;
    font-weight: bold;
  }
  .card-box {
    height: 178px;
    overflow: scroll;
  }
  .card-item {
    height: 68px;
    background: #0f644d;
    margin-bottom: 22px;
  }
  .prize {
    height: 228px;
  }

  .btn-box {
    padding: 0 40px;
    text-align: center;
    width: 200px;
    margin: 20px auto 0;
    background: url('../assets/images/login-btn.png') no-repeat center center;
    background-size: 100% 100%;
    .btn {
      display: inline-block;
      width: 90%;
      height: 58px;
      color: #fff;
      border-radius: 14px;
      text-align: center;
      line-height: 58px;
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
