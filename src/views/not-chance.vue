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
      <div class="left-box">
        <span class="name">平台购物</span>
        <span class="title">平台优惠券</span>
      </div>
      <div class="right-box">
        <span class="money"> 抽奖次数不足 </span>
        <span class="use">请获取更多抽奖机会</span>
      </div>
    </div>
    <div class="btn-box">
      <span @click="goSharePage">获取</span>
      <span @click="cancel">取消</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotChance',
  data() {
    return {}
  },
  methods: {
    goSharePage() {
      this.$router.push('/share')
    },
    cancel() {
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
  .left-box {
    display: flex;
  }
  .right-box {
    margin-left: 8px;
  }
  .content {
    position: relative;
    display: flex;
    // justify-content: center;
    align-items: center;
    background: url('../assets/images/chance/center.png') no-repeat center
      center;
    background-size: 100% 100%;
    height: 240px;
    padding:0 20px 0;
    > span {
      display: inline-block;
    }
    .name {
      width: 22px;
      color: #b55229;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
    .title {
      width: 30px;
      color: #b55229;
    }
    .my {
      color: #fff;
    }
    .money {
      display: flex;
      padding-left:7px;
      margin-bottom: 6px;
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
