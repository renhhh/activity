<!--
 * @Author: renhhh
 * @Date: 2022-04-04 23:07:31
 * @Description: 
-->
<template>
  <div class="login-box">
    <!-- <div class="main">
      <div class="code">
        <div>
          <div class="font" style="margin-bottom: 12px">宝藏密钥</div>
          <div class="font">
            <input
              id="copy"
              class="value copyBtn input-hidden"
              v-model="code"
            />
            <span>{{ code }}</span>
            <span
              data-clipboard-target="#copy"
              class="copy-btn"
              @click="copy"
            ></span>
          </div>
        </div>
        <img src="../assets/images/share/qrcode.png" alt="" />
      </div>
    </div> -->
    <div class="main"></div>
    <div class="code">
      <div>
        <div class="font" style="margin-bottom: 12px">宝藏密钥</div>
        <div class="font">
          <input id="copy" class="value copyBtn input-hidden" v-model="code" />
          <span>{{ code }}</span>
          <span
            data-clipboard-target="#copy"
            class="copy-btn"
            @click="copy"
          ></span>
        </div>
      </div>
      <img src="../assets/images/share/qrcode.png" alt="" />
    </div>
    <div class="login-btn" style="font-size: 12px" @click="share">
      点击右上角"···"分享给好友助力吧
    </div>

    <div class="login-btn" @click="goback">返 回</div>
  </div>
</template>

<script>
import axios from '../assets/js/axios'
import ClipboardJS from 'clipboard'

import { Toast } from 'vant'
export default {
  name: 'Share',
  data() {
    return {
      loginForm: {},
      code: sessionStorage.getItem('invitCode'),
      tel: '',
      sms: '',
    }
  },
  created() {},

  methods: {
    goback() {
      this.$router.push('/main')
    },
    copy() {
      // 创建一个新的ClipboardJS('.copyBtn'),()内为按钮的class
      var copyBtn = new ClipboardJS('.copy-btn')
      copyBtn.on('success', (e) => {
        Toast.success('复制成功')

        copyBtn.destroy() // 释放内存
      })
    },
    share() {
      Toast.success('请复制宝藏密钥，点击右上角“···”进行分享')
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
  padding: 30px 30px 0;
  background: url('../assets/images/share/share.jpg') no-repeat center center;
  background-size: 100% 100%;
  color: #26654c;
  overflow: scroll;
  .main {
    box-sizing: border-box;
    height: 530px;
    background: url('../assets/images/share/content.jpg') no-repeat center
      center;
    background-size: 100% 100%;
    // padding-top: 428px;
    margin-bottom: 20px;
  }
  .code {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 230px;
    background: url('../assets/images/share/code.png') no-repeat center center;
    background-size: 100% 100%;
    margin: 0 auto;
    padding: 20px 15px 10px;
    color: #0f644c;
    img {
      height: 90%;
    }
    span {
      display: inline-block;
    }
  }
  .font {
    font-weight: bold;
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
    background: url('../assets/images/share/copy.png') no-repeat center center;
    background-size: 100% 100%;
    margin-left: 8px;
  }
  .login-btn {
    width: 260px;
    height: 52px;
    margin: 14px auto 0;
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
