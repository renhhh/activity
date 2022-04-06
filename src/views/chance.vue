<!--
 * @Author: renhhh
 * @Date: 2022-04-05 14:44:15
 * @Description: 
-->
<template>
  <div class="login-box">
    <div class="content">
      <span class="name">{{ form.F_CouponName }}购物</span>
      <span class="title">平台优惠券</span>
      <span class="money">
        <span class="unit">¥</span>
        <span class="num">{{ form.F_DiscountMoney }}</span>
      </span>
      <span class="use">满{{form.F_DiscountUse }}可使用</span>
      <span class="my">可到 “我的” 中查看</span>
    </div>
    <div class="login-btn" @click="clickLogin">确 定</div>
  </div>
</template>

<script>
import axios from '../assets/js/axios'
import { Toast } from 'vant'
export default {
  name: 'Chance',
  data() {
    return {
      form: {},
      mobile: sessionStorage.getItem('mobile'),
    }
  },
  created() {
    this.getData()
  },

  methods: {
    getData() {
      axios
        .get('/LuckyDraw/goodluck', {
          params: {
            mobile: this.mobile,
          },
        })
        .then((res) => {
          const { data } = res
          this.form = data.data
        })
    },
    clickLogin() {
      this.$router.push('/main')
    },
  },
}
</script>

<style lang="scss" scoped>
.login-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 147px 70px 0;
  background: url('../assets/images/chance/bg.jpg') no-repeat center center;
  background-size: 100% 100%;
  color: #26654c;
  .content {
    position: relative;
    background: url('../assets/images/chance/center.png') no-repeat center
      center;
    background-size: 100% 100%;
    height: 240px;
    > span {
      display: inline-block;
      position: absolute;
    }
    .name {
      width: 30px;
      top: 92px;
      left: 27px;
      color: #b55229;
      font-weight: bold;
    }
    .title {
      width: 30px;
      top: 83px;
      left: 49px;
      color: #b55229;
    }
    .my {
      bottom: 19px;
      left: 79px;
      color: #fff;
    }
    .money {
      display: flex;
      align-items: end;
      top: 99px;
      left: 165px;
      color: #b55229;
      .unit {
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 3px;
        margin-right: 4px;
      }
      .num {
        font-size: 26px;
        font-weight: bold;
      }
    }
    .use {
      padding: 8px 23px;
      top: 133px;
      left: 128px;
      background: #b55229;
      border-radius: 5px;
      color: #ffffc4;
    }
  }

  .login-btn {
    width: 260px;
    height: 52px;
    margin: 24px auto 0;
    text-align: center;
    line-height: 52px;
    background: url('../assets/images/login-btn.png') no-repeat center center;
    background-size: 100% 100%;
    color: #fff;
    font-weight: bold;
    font-size: 22px;
  }
}
</style>
