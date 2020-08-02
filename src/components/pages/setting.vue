<template>
  <div>
    <div class="box">
      <div class="nav-bar">
        <button class="btn" v-show="isShow" @click="goBack">
          <van-icon name="arrow-left" />
        </button>
        <span class="nav-span">设置</span>
        <button class="btn1" @click="$router.push('/myqr')">
          <van-icon name="qr" />
        </button>
      </div>
    </div>
    <div class="main">
      <van-cell-group>
        <van-cell title="绑定手机号" is-link />
        <van-cell title="帐号与安全" is-link />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="设置字体大小" is-link />
        <van-cell title="支付设置" is-link />
        <van-cell title="隐私" is-link />
        <van-cell title="通用" is-link />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="PLUS会员" is-link />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="问题反馈" is-link />
        <van-cell title="关于小U商城" is-link />
      </van-cell-group>
      <van-button type="default">切换账户</van-button>
      <van-button type="default" to="/login" is-link>退出登录</van-button>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";

export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    goBack() {
      this.$router.go("-1");
    },
  },
  mounted() {},
};
</script>

<style lang="" scoped>
.main {
  width: 100vw;
  height: calc(100vh - 0.9rem) !important;
  margin-top: 0.9rem;
}
.box {
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
}
.nav-bar {
  position: relative;
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  background: #fff;
}
.nav-bar .btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.7rem;
  height: 0.7rem;
  background: transparent;
  border: none;
}
.nav-bar .btn1 {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.7rem;
  height: 0.7rem;
  background: transparent;
  border: none;
}
.nav-bar .nav-span {
  color: #333;
  font-size: 0.26rem;
}
.btn,
.btn1 {
  margin: 0.08rem;
  font-size: 0.36rem;
  color: #333;
}
.btn1 {
  font-size: 0.42rem;
}
.title {
  width: 100vw;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
  background-color: #fff;
}
.van-cell-group {
  margin-top: 0.14rem;
}
.van-cell {
  height: 0.8rem;
  align-items: center;
  font-size: 0.26rem;
  border-bottom: 1px solid #fafafa;
}
.van-button {
  width: 100vw;
  margin-top: 0.14rem;
  font-size: 0.2rem;
}
</style>
