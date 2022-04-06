<!--
 * @Author: renhhh
 * @Date: 2022-04-04 22:52:24
 * @Description: 
-->
<template>
  <div class="login-box">
    <div class="login-title"></div>
    <div class="title">完善信息</div>
    <van-field
      v-model="loginForm.f_RealName"
      class="telephone"
      placeholder="请输入您的昵称"
    />
    <van-field
      readonly
      clickable
      name="picker"
      :value="loginForm.f_Industry"
      placeholder="请输入您的行业"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <van-field
      readonly
      clickable
      name="picker"
      :value="loginForm.f_Address"
      placeholder="请输入您的地址"
      @click="showArea = true"
    />
    <van-popup v-model="showArea" position="bottom">
      <van-area
        :area-list="areaList"
        @confirm="onConfirmArea"
        @cancel="showArea = false"
      />
    </van-popup>
    <div class="login-btn" @click="clickLogin">立即进入</div>
  </div>
</template>

<script>
import axios from '../assets/js/axios'
import { Toast } from 'vant'
import { areaList } from '@vant/area-data'

export default {
  name: 'Info',
  data() {
    return {
      loginForm: {
        f_Mobile: '',
        f_RealName: '',
        f_Industry: '',
        f_Address: '',
      },
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
      showPicker: false,
      showArea: false,
      areaList: areaList,

    }
  },
  created() {
    this.loginForm.f_Mobile = this.$route.query.f_Mobile
  },

  methods: {
    onConfirmArea(values) {
      this.loginForm.f_Address = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('-')
      this.showArea = false
    },
    clickLogin() {
      const { f_RealName, f_Industry, f_Address } = this.loginForm
      if (f_RealName === '') {
        Toast.fail('昵称不能为空！')
        return
      }
      if (f_Industry === '') {
        Toast.fail('行业不能为空！')
        return
      }
      if (f_Address === '') {
        Toast.fail('地址不能为空！')
        return
      }
      axios.post('/User/savesdgq', this.loginForm).then((res) => {
        const { data } = res
        console.log(data)
        this.$router.push({
          path: '/main',
          query: {
            f_Mobile: this.loginForm.f_Mobile,
          },
        })
        // sessionStorage.setItem('telephone', this.tel)
        // sessionStorage.setItem('userInfo', JSON.stringify(data.data))
        // let isExist = data.data.isExist
        // if (isExist) {
        //   this.$router.push({
        //     path: '/card',
        //   })
        // } else {
        //   this.$router.push({
        //     path: '/form',
        //   })
        // }
        // console.log(data.data)
      })
    },
    onConfirm(value) {
      this.loginForm.f_Industry = value
      this.showPicker = false
    },
  },
}
</script>
<style lang="scss">
.login-box {
  .van-cell {
    border: 1px solid #ccc;
    border-radius: 15px;
    margin-bottom: 24px;
  }
}
</style>
<style lang="scss" scoped>
.login-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 147px 70px 0;
  background: url('../assets/images/login.jpg') no-repeat center center;
  background-size: 100% 100%;
  color: #26654c;
  .login-title {
    width: 250px;
    height: 60px;
    background: url('../assets/images/login-title.png') no-repeat left center;
    background-size: contain;
  }
  .title {
    margin: 17px 0 26px;
    color: #333333;
    font-size: 30px;
    font-weight: bold;
  }

  .login-btn {
    height: 52px;
    margin-top: 24px;
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
