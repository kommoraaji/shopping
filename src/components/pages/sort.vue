<template>
  <div class="main">
    <v-title></v-title>

    <van-tree-select :items="items" :main-active-index.sync="active">
      <template #content>
        <div class="main" v-if="active === 0">
          <div class="stamp">
            <h1 class="tit">
              洗发类
              <span class="more">更多></span>
            </h1>
            <ul>
              <li class="shampoo" v-for="item in shampoo" :key="item.id">
                <img v-lazy="item.img" />
                <p>{{item.name}}</p>
              </li>
            </ul>
          </div>
          <div class="stamp">
            <h1 class="title">
              染发类
              <span class="mored">更多></span>
            </h1>
            <ul>
              <li class="shampoo" v-for="item in coloring" :key="item.id">
                <img v-lazy="item.img" />
                <p>{{item.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      active: 0,
      items: [
        { text: "施华寇" },
        { text: "沙宣" },
        { text: "欧莱雅" },
        { text: "潘婷" },
        { text: "资生堂" },
        { text: "阿道夫" },
        { text: "卡诗" },
        { text: "海飞丝" },
        { text: "资生堂" },
      ],
      shampoo: [
        {
          id: 1,
          name: "护亮泽洗发水",
          img: require("@/assets/images/sp01.jpg"),
        },
        {
          id: 2,
          name: "滋养洗发水",
          img: require("@/assets/images/sp02.jpg"),
        },
        {
          id: 3,
          name: "柔顺洗发露",
          img: require("@/assets/images/sp03.jpg"),
        },
        {
          id: 4,
          name: "去屑洗发露",
          img: require("@/assets/images/sp04.jpg"),
        },
        {
          id: 5,
          name: "柔顺洗发露",
          img: require("@/assets/images/sp05.jpg"),
        },
        {
          id: 6,
          name: "焕彩洗发水",
          img: require("@/assets/images/sp06.jpg"),
        },
      ],
      coloring: [
        {
          id: 7,
          name: "施华蔻染色",
          img: require("@/assets/images/sp07.jpg"),
        },
        {
          id: 8,
          name: "施华蔻双氧乳",
          img: require("@/assets/images/sp08.jpg"),
        },
        {
          id: 9,
          name: "施华蔻染发膏",
          img: require("@/assets/images/sp09.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang="" scoped>
@import url("../../assets/css/sort.css");
</style>