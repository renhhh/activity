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
    <!-- <div class="tip">{{ tip }}</div> -->

  </div>
</template>

<script>
export default {
  name: 'NotChance',
  data() {
    return {
      sentences: [
        '1992年 世达工具上海工厂投产',
        '1997年 世达品牌创立',
        '1998年 世达工具成为丹纳赫全资子公司，在中国市场创立“终身保用”服务标准',
        '1999年 世达SATA VAN在中国市场创立车载终端营销体验模式',
        '2002年 世达手工具在中国市场占有率名列前茅，国内流通领域工具五金质量评比十强名列第一',
        '2003年 世达赞助F3三级方程式赛车',
        '2005年 世达工具第一家旗舰店—上海北京东路新一五金店开业',
        '2006年 “有你有我有未来”全国经销商培训计划启动',
        '2007年 世达与教育部职成司签约合作成为全国最早赞助职教事业的五金工具企业之一',
        '2008年 世达首获上海市著名商标殊荣的五金工具企业之一',
        '2009年 世达捐造的贵定县希望小学落成开学',
        '2010年 APEX工具集团成立，世达为其全资子公司',
        '2011年 世达个人安防用品系列产品上市',
        '2012年 世达汽保设备系列产品上市',
        '2013年 贝恩资本收购APEX工具集团',
        '2014年 世达全国首家汽保体验中心开业',
        '2015年 世达成功收购上海一成汽车科技有限公司',
        '2016年 世达整合美国Apex专业生产线工具中国业务',
        '2017年 世达整合Weller电子产品中国业务，并与兄弟品牌Cleco动力工具携手合作',
        '2018年 世达二十周年，品牌全面升级正式启用品牌新logo及全新VI视觉系统',
        '2019年 世达科创中心在上海南翔揭幕',
        '2020年 第一届全国技能大赛高级合作伙伴',
        '2022年 世达数字化转型：SATA Van 在中国市场创立线上共享模式',
      ],
      tip: '',
    }
  },
  created() {
    let idx = this.getRandomIntInclusive(0, 22)
    this.tip = this.sentences[idx]
  },
  methods: {
    goSharePage() {
      this.$router.push('/share')
    },
    cancel() {
      this.$router.push('/main')
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
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
  .left-box {
    display: flex;
  }
  .right-box {
    margin-left: 8px;
  }
  .tip {
    margin-top: 18px;
    font-weight: bold;
    line-height: 18px;
    text-indent: 20px;
    color: #2a7758;
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
    padding: 0 20px 0;
    > span {
      display: inline-block;
    }
    .name {
      width: 22px;
      color: #323233;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
    .title {
      width: 30px;
      color: #323233;
    }
    .my {
      color: #fff;
    }
    .money {
      display: flex;
      padding-left: 7px;
      margin-bottom: 6px;
      color: #323233;
      font-weight: bold;
      font-size: 22px;
    }
    .use {
      top: 133px;
      left: 128px;
      color: #323233;
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
