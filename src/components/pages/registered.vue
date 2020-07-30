<template>
  <div>
    <div class="main">
      <van-nav-bar title="注册" left-arrow @click-left="$router.back()" />
      <van-form @submit="registered">
        <van-field
          v-model="user.phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="user.nickname"
          name="昵称"
          label="昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
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
          <van-button round block type="info" native-type="submit">注册</van-button>
        </div>
        <div class="text">
          <p @click="$router.push('/login')">已有账号？点我登录</p>
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
        nickname: "",
      },
    };
  },
  methods: {
    registered(values) {
      console.log("submit", values);
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
