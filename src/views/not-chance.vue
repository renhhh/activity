<!--
 * @Author: renhhh
 * @Date: 2022-04-05 15:36:03
 * @Description: 
-->
<!--
 * @Author: renhhh
 * @Date: 2022-04-05 14:44:15
 * @Description: 
-->
<template>
  <div class="login-box">
    <div class="content">
      <span class="name">平台购物</span>
      <span class="title">平台优惠券</span>
      <span class="money"> 抽奖次数不足 </span>
      <span class="use">请获取更多抽奖机会</span>
    </div>
    <div class="btn-box">
      <span @click="goSharePage">获取</span>
      <span @click="cancel">取消</span>
    </div>
  </div>
</template>

<script>
import axios from '../assets/js/axios'
import { Toast } from 'vant'
export default {
  name: 'NotChance',
  data() {
    return {

    }
  },
  created() {},

  methods: {
    goSharePage(){
      this.$router.push('/share')
    },
    cancel(){
      this.$router.push('/main')
    }
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
      left: 134px;
      color: #b55229;
      font-weight: bold;
      font-size: 22px;
    }
    .use {
      top: 133px;
      left: 128px;

      color: #b55229;
    }
  }
  .btn-box {
    margin-top: 22px;
    display: flex;
    justify-content: space-around;
    > span {
      width: 100px;
      height: 40px;
      background: url('../assets/images/login-btn.png') no-repeat center center;
      background-size: 100% 100%;
      color: #fff;
      font-size: 20px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>
