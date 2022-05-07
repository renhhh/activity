<!--
 * @Author: renhhh
 * @Date: 2022-04-04 23:17:00
 * @Description: 
-->
<!--
 * @Author: renhhh
 * @Date: 2022-04-04 23:07:31
 * @Description: 
-->
<template>
  <div class="address-box">
    <div class="header-title">请填写收货信息</div>
    <van-row type="flex" align="center" class="mt-24">
      <van-col span="7">
        <span class="label">收货人</span>
      </van-col>
      <van-col span="17">
        <van-field v-model="form.contactName" placeholder="名字"
      /></van-col>
    </van-row>
    <van-row type="flex" align="center" class="mt-24">
      <van-col span="7">
        <span class="label">手机号码</span>
      </van-col>
      <van-col span="17">
        <van-field
          v-model="form.contactTel"
          type="tel"
          class="telephone"
          placeholder="手机号"
      /></van-col>
    </van-row>
    <van-row type="flex" align="center" class="mt-24">
      <van-col span="7">
        <span class="label">所在地区</span>
      </van-col>
      <van-col span="17">
        <van-field
          readonly
          clickable
          name="picker"
          :value="form.sSX"
          placeholder="省、市、区、街道"
          @click="showArea = true" />
        <van-popup v-model="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onConfirm"
            @cancel="showArea = false"
          /> </van-popup
      ></van-col>
    </van-row>
    <van-row type="flex" align="center" class="mt-24">
      <van-col span="7">
        <span class="label">选择行业</span>
      </van-col>
      <van-col span="17">
        <van-field
          readonly
          clickable
          name="picker"
          :value="form.industry"
          placeholder="请输入您的行业"
          @click="showPicker = true" />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirmHang"
            @cancel="showPicker = false"
          /> </van-popup
      ></van-col>
    </van-row>
    <van-row type="flex" align="center" class="mt-24">
      <van-col span="7">
        <span class="label">是否采购</span>
      </van-col>
      <van-col span="17">
        <van-field
          readonly
          clickable
          name="picker"
          :value="form.isNeedProduct"
          placeholder="是否有采购需求"
          @click="showCai = true" />
        <van-popup v-model="showCai" position="bottom">
          <van-picker
            show-toolbar
            :columns="['是', '否']"
            @confirm="onConfirmCai"
            @cancel="showCai = false"
          /> </van-popup
      ></van-col>
    </van-row>
    <van-row type="flex" align="top" class="mt-24">
      <van-col span="7">
        <span class="label">详细地址</span>
      </van-col>
      <van-col span="17">
        <van-field
          v-model="form.address"
          rows="3"
          autosize
          type="textarea"
          class="telephone"
          placeholder="小区楼栋/乡村名称"
        />
      </van-col>
    </van-row>
    <div class="login-btn" @click="onSubmit">领 取</div>
    <div class="back" @click="goback">返 回</div>
    <div class="footer">试用品将在活动结束后30个工作日内寄出，请耐心等待</div>
  </div>
</template>

<script>
import axios from '../assets/js/axios'
import { Toast } from 'vant'
import { areaList } from '@vant/area-data'
export default {
  name: 'Adress',
  data() {
    return {
      level: '',
      username: '',
      password: '',
      form: {},
      loginForm: {},
      tel: '',
      columns: [
        '轨道交通',
        '工程机械',
        '能源',
        '钢铁',
        '电力',
        '电子',
        '汽车',
        '其他',
      ],
      value: '',
      areaList: areaList,
      showArea: false,
      showPicker: false,
      showCai: false,
    }
  },
  created() {
    this.level = this.$route.query.level
  },

  methods: {
    onConfirm(values) {
      this.form.sSX = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('-')
      this.showArea = false
    },
    onSubmit(values) {
      this.form.mobile = sessionStorage.getItem('mobile')
      this.form.level = this.level
      this.form.isNeedProduct = this.form.isNeedProduct === '是' ? 1 : 0
      axios
        .get('/LuckyDraw/giftexchange', {
          params: {
            ...this.form,
          },
        })
        .then(() => {
          Toast.success('领取成功，等待发货中..')
          this.$router.push('/my')
        })
      console.log('submit', values)
    },
    goback() {
      this.$router.push('/my')
    },
    onConfirmHang(value) {
      this.form.industry = value
      this.showPicker = false
    },
    onConfirmCai(value) {
      this.form.isNeedProduct = value
      this.showCai = false
    },
  },
}
</script>
<style lang="scss">
.address-box {
  .van-cell {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 6px 16px;
    background: #dbd7d6;
  }
  input::placeholder {
    color: #626262;
  }
  input {
    color: #000;
  }
}
</style>
<style lang="scss" scoped>
.address-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-height: 768px;
  height: 100%;
  padding: 50px 40px 0;
  background: url('../assets/images/address/bg.jpg') no-repeat center center;
  background-size: 100% 100%;
  color: #26654c;
  .label {
    color: #303231;
    font-size: 20px;
    font-weight: bold;
  }
  .mt-24 {
    margin-bottom: 24px;
  }
  .header-title {
    margin-bottom: 30px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
  .footer {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
  }
  .login-btn {
    height: 46px;
    // margin-top: 24px;
    text-align: center;
    line-height: 46px;
    background: url('../assets/images/login-btn.png') no-repeat center center;
    background-size: 100% 100%;
    color: #fff;
    font-weight: bold;
    font-size: 22px;
  }
  .back {
    height: 46px;
    margin-top: 24px;
    text-align: center;
    line-height: 46px;
    background: url('../assets/images/address/back.png') no-repeat center center;
    background-size: 100% 100%;
    color: #00573e;
    font-weight: bold;
    font-size: 22px;
  }
}
</style>
