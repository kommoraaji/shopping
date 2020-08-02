<template>
  <div>
    <div class="box">
      <div class="nav-bar">
        <button class="btn" v-show="isShow" @click="goBack">
          <van-icon name="arrow-left" />
        </button>
        <span class="nav-span">{{this.$route.name}}</span>
        <button v-show="rightshow" class="btn1" @click="showShare = true">
          <van-icon name="ellipsis" />
        </button>
        <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      rightshow: true,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go("-1");
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
  mounted() {
    if (this.$route.name == "购物车") {
      this.isShow = false;
      this.rightshow = false;
    }
    if (this.$route.name == "商品分类") {
      this.rightshow = false;
    }
    if (this.$route.name == "我的优惠券" || this.$route.name == "地址管理") {
      this.rightshow = false;
    }
  },
};
</script>

<style lang="" scoped>
.box {
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.nav-bar {
  position: relative;
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  background: #f26b11;
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
  color: #fff;
  font-size: 0.32rem;
}
.btn,
.btn1 {
  margin: 0.08rem;
  font-size: 0.36rem;
  color: #fff;
}
.btn1 {
  font-size: 0.52rem;
}
</style>