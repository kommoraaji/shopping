<template>
  <div>
    <div class="box">
      <div class="nav-bar">
        <button class="btn" v-show="isShow" @click="goBack">
          <van-icon name="arrow-left" />
        </button>
        <span class="nav-span">我的二维码</span>
      </div>
    </div>
    <div class="main">
      <div class="frame">
        <h3 class="text">用户昵称</h3>
        <div id="qrcode" @click="showShare = true"></div>
        <p class="prompt">点击二维码分享给好友</p>
      </div>
      <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";

export default {
  data() {
    return {
      isShow: true,
      link: "https://baidu.com",
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "QQ", icon: "qq" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go("-1");
    },
    qrcode() {
      let that = this;
      let qrcode = new QRCode("qrcode", {
        width: 160,
        height: 160, // 高度
        text: this.link, // 二维码内容
        // render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: "#f0f", // 背景色
        // foreground: "#ff0", // 前景色
      });
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.qrcode();
    });
  },
};
</script>

<style lang="" scoped>
.main {
  width: 100vw;
  height: calc(100vh - 0.9rem) !important;
  background-color: #fff;
  margin-top: 0.9rem;
}
.box {
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
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
  margin: 0.08rem;
  font-size: 0.36rem;
  color: #333;
}
.nav-bar .nav-span {
  color: #333;
  font-size: 0.26rem;
}
.frame {
  padding: 10px 20px;
  position: absolute;
  left: 50%;
  top: 23%;
  transform: translate(-50%);
  text-align: center;
}
.frame .text {
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 10px;
}
#qrcode {
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
}
.frame .prompt {
  font-size: 14px;
}
</style>
