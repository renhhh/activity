<template>
  <div class="login-box">
    <div class="login-title"></div>
    <div class="title">欢迎登录</div>
    <van-field
      v-model="loginForm.f_Mobile"
      type="tel"
      class="telephone"
      placeholder="请输入手机号"
    />
    <van-field
      v-model="loginForm.f_Captcha"
      center
      clearable
      placeholder="请输入短信验证码"
    >
      <template #button>
        <span
          v-show="verification"
          style="color: #6fc56c"
          @click="getVerifyCode"
          >点击获取</span
        >
        <span v-show="!verification"
          ><span style="color: #6fc56c">{{ timer }}</span
          >秒后重新获取</span
        >
      </template>
    </van-field>
    <van-field
      v-model="loginForm.f_InvitCode"
      class="telephone"
      placeholder="请输入邀请码"
    />
    <div class="login-btn" @click="clickLogin">确 定</div>
  </div>
</template>

<script>
import axios from '../assets/js/axios'
import { Toast } from 'vant'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        f_RealName: '',
        f_Mobile: '',
        f_Industry: '',
        f_InvitCode: '',
        f_Captcha: '',
        f_Address: '',
      },
      timer: 60,
      verification: true,
    }
  },
  created() {
    if (!document.referrer && window.location.href.indexOf('eqxiu.com') == -1) {
      window.location.href = `https://i.eqxiu.com/s/dmz3GIky?bt=yxy`
    }
  },
  methods: {
    getVerifyCode() {
      var iphoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
      const { f_Mobile } = this.loginForm
      if (!f_Mobile) {
        Toast.fail('手机号不能为空！')
        return
      }
      if (!iphoneReg.test(f_Mobile)) {
        Toast.fail('请输入正确的手机号！')
      }
      axios
        .get('/User/SM', {
          params: {
            mobile: f_Mobile,
          },
        })
        .then(() => {
          Toast.success('验证码已发送')
          this.verification = false
          let authTimer = setInterval(() => {
            this.timer--
            if (this.timer <= 0) {
              this.verification = true
              clearInterval(authTimer)
            }
          }, 1000)
        })
    },
    clickLogin() {
      const { f_Mobile, f_Captcha } = this.loginForm
      if (f_Mobile === '') {
        Toast.fail('手机号不能为空！')
        return
      }
      if (f_Captcha === '') {
        Toast.fail('验证码不能为空！')
        return
      }
      axios.post('/User/savesdgq', this.loginForm).then((res) => {
        console.log(res)
        const { data } = res
        sessionStorage.setItem('mobile', this.loginForm.f_Mobile)
        sessionStorage.setItem('invitCode', data.data.invitCode)

        // sessionStorage.setItem('userInfo', JSON.stringify(data.data))
        let isExist = data.data.isExist
        if (isExist) {
          this.$router.push({
            path: '/main',
            query: {
              f_Mobile: this.loginForm.f_Mobile,
            },
          })
        } else {
          this.$router.push({
            path: '/info',
            query: {
              f_Mobile: this.loginForm.f_Mobile,
            },
          })
        }
        console.log(data.data)
      })
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
