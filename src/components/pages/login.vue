<template>
  <div>
    <div class="main">
      <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
      <van-form @submit="login">
        <van-field
          v-model="user.phone"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
        <div class="text">
          <p @click="$router.push('/registered')">没有账号？点我注册</p>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    login(values) {
      console.log("submit", values);
    },
    onClickLeft() {
      this.$router.push("/mine");
    },
  },
  mounted() {},
};
</script>

<style lang="" scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
.text {
  text-align: center;
}
</style>
