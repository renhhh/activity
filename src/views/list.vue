<!--
 * @Author: renhhh
 * @Date: 2022-04-04 22:52:24
 * @Description: 
-->
<template>
  <div class="login-box">
    <div class="header">可领取的试用品</div>
    <div class="main">
      <div
        class="item"
        :class="[item.have ? 'deactive' : 'active']"
        v-for="(item, index) of comList"
        :key="index"
        @click="handleClick(item)"
      >
        <img :src="item.url" />
        <!-- <div class="price">¥{{ item.price }}</div> -->
        <div class="name">{{ item.name }}</div>
        <div class="desc">获得帮助{{ item.count }}次可以领取</div>
      </div>
    </div>
    <div class="login-btn" @click="$router.push('/main')">返回寻宝</div>
  </div>
</template>

<script>
import axios from '../assets/js/axios'
import { Toast } from 'vant'
export default {
  name: 'List',
  data() {
    return {
      list: [
        {
          url: require('../assets/images/list/1.png'),
          level: 1,
          price: 10.9,
          name: '3米水滴卷尺',
          count: 3,
          have: false,
        },
        {
          url: require('../assets/images/list/2.png'),
          level: 2,
          price: 17,
          name: '铝合金美工刀',
          count: 5,
          have: false,
        },
        {
          url: require('../assets/images/list/3.png'),
          level: 3,
          price: 21.9,
          name: '塑料工具箱12',
          count: 8,
          have: false,
        },
        {
          url: require('../assets/images/list/4.png'),
          level: 4,
          price: 35,
          name: '防撞帽',
          count: 18,
          have: false,
        },
        {
          url: require('../assets/images/list/5.png'),
          level: 5,
          price: 74,
          name: '工具包',
          count: 28,
          have: false,
        },
        {
          url: require('../assets/images/list/6.png'),
          level: 6,
          price: 89,
          name: '7件套',
          count: 36,
          have: false,
        },
        {
          url: require('../assets/images/list/7.png'),
          level: 7,
          price: 179,
          name: '安全鞋',
          count: 58,
          have: false,
        },
        {
          url: require('../assets/images/list/8.png'),
          level: 8,
          price: 199,
          name: '锂电钻',
          count: 68,
          have: false,
        },
        {
          url: require('../assets/images/list/9.png'),
          level: 9,
          price: 179,
          name: '118件套',
          count: 88,
          have: false,
        },
        {
          url: require('../assets/images/list/10.png'),
          level: 10,
          price: 1618,
          name: '终极大奖',
          count: 188,
          have: false,
        },
      ],
    }
  },
  computed: {
    comList() {
      let level = this.$route.query.level
      return this.list.map((item) => {
        if (item.level == level) {
          item.have = true
        }
        return item
      })
    },
  },
  methods: {
    handleClick(item) {
      let level = this.$route.query.level
      if (item.level < level) {
        Toast.fail('你已超过邀请人数，不可领取。')
        return
      }
      if (item.level > level) {
        let count = item.count - this.$route.query.num
        Toast.fail(`你还需获得${count}次帮助即可领取`)
        return
      }
      this.$router.push('/my')
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
            f_Mobile: sessionStorage.getItem('mobile'),
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
<style lang="scss" scoped>
.login-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 20px 0;
  background: url('../assets/images/list/bg.jpg') no-repeat center center;
  background-size: 100% 100%;
  color: #26654c;
  overflow: scroll;
  .header {
    width: 150px;
    margin: 0 auto;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: 2px solid #0f644c;
    border-radius: 26px;
    color: #0f644c;
    background: #fff;
    font-weight: bold;
    margin-bottom: 18px;
  }
  .main {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 45%;
      height: 180px;
      margin: 0 18px 14px 0;
      border-radius: 12px;
      padding-left: 12px;
      box-sizing: border-box;
    }
    img {
      display: block;
      width: 146px;
      height: 106px;
      padding-left: 8px;
    }
    .price {
      font-size: 18px;
      font-weight: bold;
    }
    .name {
      margin: 4px 0 8px 0;
      font-size: 15px;
      font-weight: bold;
    }
    .desc {
      font-size: 14px;
    }
  }
  .active {
    color: #4a4a4a;
    background: #c9c9c9;
  }
  .deactive {
    color: #065c43;
    background: #fff;
  }
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
    width: 270px;
    height: 52px;
    margin: 14px auto 12px;
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
