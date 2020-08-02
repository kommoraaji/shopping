<template>
  <div>
    <div class="box">
      <div class="nav-bar">
        <span class="nav-span">{{this.$route.name}}</span>
        <button class="btn1" @click="tosetting">
          <van-icon name="setting-o" />
        </button>
      </div>
    </div>
    <header>
      <van-image @click="userdetail" round class="img" :src="require('@/assets/images/mine.jpg')" />
      <div class="name">
        <p>昵称</p>
        <span>v1</span>
      </div>
      <van-button type="default">每日签到</van-button>
    </header>
    <div class="nav">
      <ul>
        <li class="nav-item">
          <van-icon name="phone-o" />
          <p>全部订单</p>
        </li>
        <li class="nav-item">
          <van-icon name="pending-payment" />
          <p>待付款</p>
        </li>
        <li class="nav-item">
          <van-icon name="logistics" />
          <p>待收货</p>
        </li>
      </ul>
    </div>
    <div class="main">
      <van-cell title="地址管理" to="/address" icon="location-o" is-link />
      <van-cell title="我的钱包" icon="points" is-link value="200金币" />
      <van-cell title="我的优惠券" to="/coupon" icon="coupon-o" is-link />
      <van-cell title="我的二维码" to="/myqr" icon="scan" is-link />
      <van-cell title="我的小伙伴" icon="friends-o" is-link />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        url: "",
      },
    };
  },
  methods: {
    userdetail() {
      this.$router.push("/userdetail");
    },
    tosetting() {
      this.$router.push("./setting");
    },
  },
};
</script>

<style lang="" scoped>
@import url("../../assets/css/mine.css");
</style>