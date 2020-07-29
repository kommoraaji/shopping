<template>
  <div>
    <v-title></v-title>
    <header>
      <van-image round class="img" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="name">
        <p>昵称</p>
        <span>v1</span>
      </div>
      <button class="signin">每日签到</button>
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
      <van-cell title="地址管理" icon="location-o" is-link to="/address" />
      <van-cell title="我的钱包" icon="points" is-link value="内容" />
      <van-cell title="我的优惠券" icon="coupon-o" is-link />
      <van-cell title="我的二维码" icon="scan" is-link />
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
};
</script>

<style lang="" scoped>
@import url("../../assets/css/mine.css");
.nav-item .van-cell__title{
  font-size: 60px;
}
</style>