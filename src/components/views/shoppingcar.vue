<template>
  <div>
    <v-title></v-title>
    <div class="main">
      <div class="list">
        <ul>
          <li class="listItem">
            <van-swipe-cell>
              <van-checkbox v-model="checked" checked-color="#f26b11"></van-checkbox>
              <van-card
                price="2.00"
                desc="描述信息"
                title="商品标题"
                class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <van-stepper v-model="value" min="1" max="5" disable-input />
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                  @click="deleteitem"
                />
              </template>
            </van-swipe-cell>
          </li>
        </ul>
        <van-submit-bar :price="3050" :button-text="'去结算('+3+')件'" @submit="onSubmit">
          <van-checkbox v-model="checked" checked-color="#f26b11">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      checked: true,
      value: 1,
    };
  },
  methods: {
    onSubmit() {},
    deleteitem() {
      Dialog.confirm({
        title: "标题",
        message: "确认删除该条数据吗",
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
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

.list ul {
  padding-top: 0.3rem;
  background-color: #fff;
}

.listItem {
  width: 100vw;
  margin-bottom: 0.3rem;
  box-shadow: 0 0 5px 1px #f1f1f1;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}

.listItem .van-swipe-cell {
  padding-left: 0.7rem;
  position: relative;
}

.listItem .van-checkbox {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: -0.35rem;
  z-index: 999;
}

.listItem .van-stepper {
  position: absolute;
  bottom: 0.2rem;
  right: 0.3rem;
}

.van-submit-bar {
  bottom: 1.2rem;
  border-top: 1px solid #f1f1f1;
}
.van-submit-bar__bar {
  padding-right: 0;
}
.van-submit-bar__price {
  color: #f26b11;
}
.van-submit-bar .van-button {
  border-radius: 0%;
  height: 100%;
  background: #f26b11;
}
</style>