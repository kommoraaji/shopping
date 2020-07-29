<template>
  <div>
    <router-view></router-view>
    <div class="nav">
      <router-link class="nav-item" active-class="select" to="/home">
        <i class="iconfont icon-shouye"></i>
        <p class="icon-word">首页</p>
      </router-link>
      <router-link class="nav-item" active-class="select" to="/shoppingcar">
        <i class="iconfont icon-gouwuche"></i>
        <p class="icon-word">购物车</p>
      </router-link>
      <router-link class="nav-item" active-class="select" to="/mine">
        <i class="iconfont icon-wode"></i>
        <p class="icon-word">我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="" scoped>
.nav {
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 1.2rem;
  background: #fff;
  border-top: 1px solid #ebebeb;
}
.nav-item {
  flex: 1;
}
.iconfont {
  font-size: 0.5rem;
}
.icon-word {
  font-size: 0.2rem;
  margin-top: 2px;
}
.select .iconfont,
.select .icon-word {
  color: orange;
}
</style>