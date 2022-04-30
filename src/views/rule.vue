<template>
  <div class="rule-box">
    <!-- <img src="../assets/images/rule/title.png" alt="title" class="title" /> -->
    <!-- <div class="invote common-border">
      <ul>
        <li>
          1.SATA世达踏青寻宝活动以踏青图形式呈现
          并展开，踏青图包含花朵、树叶等可点击元
          素，每寻找到一个可点击元素，可选择是否 抽奖，抽奖即有机会获取奖品。
        </li>
        <li>
          2.初始抽奖次数为1次，但寻宝机会无限次，
          当抽奖次数不足时，可通过分享专属宝藏秘钥 获取抽奖次数。
        </li>
        <li>
          3.玩游戏后可在【我的】获取专属宝藏秘钥， 使用专属宝藏秘钥，
          每成功获得一名新用户帮 助，即可获得一次抽奖次数。
        </li>
        <li>
          4.累计获得帮助3次、5次、8次、18次、 28次、36次、58次、68次、88次、
          188次，均可获得对应等级的礼品，每级奖
          品仅可领取一次，每次领取完毕，邀请人数 清零。
        </li>
        <li>
          5.优惠券以券码形式发放。实物奖品请确保
          领奖信息正确，领取后由工作人员3个工作 日内寄出。
        </li>
      </ul>
    </div> -->

    <div class="btn-box">
      <span class="btn" @click="goMain">返回寻宝</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rule',
  methods: {
    goMain() {
      this.$router.push('/main')
    },
  },
}
</script>

<style lang="scss" scoped>
.rule-box {
  width: 100%;
  height: 100%;
  background: url('../assets/images/rule/rule.jpg') no-repeat center center;
  background-size: 100% 100%;
  // color: #0f644d;
  box-sizing: border-box;
  // padding: 77px 40px 20px;
  position: relative;
  overflow: scroll;
  .title {
    display: block;
    margin: 0 auto;
    width: 180px;
  }
  .invote {
    padding: 18px 38px;
    background: #fff;
    color: #0d0d0f;
    font-size: 15px;
    line-height: 26px;
    font-weight: 600;
    margin-top: 20px;
    li {
      font-weight: 500;
    }
  }
  .common-border {
    border-radius: 28px;
    box-shadow: 6px 6px 10px #ccc;
  }
  .btn-box {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    .btn {
      display: inline-block;
      // width: 90%;
      width: 200px;
      height: 50px;
      background: url('../assets/images/rule/btn.png') no-repeat center center;
      background-size: 100% 100%;
      color: #fff;
      border-radius: 14px;
      text-align: center;
      line-height: 50px;
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
