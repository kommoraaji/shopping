<template>
  <div>
    <header>
      <div class="header">
        <img src="@/assets/images/logo.png" alt class="img" />
        <input class="input" type="text" placeholder="寻找商品" />
        <span class="point">· · ·</span>
      </div>

      <van-tabs v-model="active" swipeable>
        <van-tab v-for="item in list" :key="item.id" :title="item.name"></van-tab>
      </van-tabs>

      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in images" :key="item.id">
          <img class="images" :src="item.img" />
        </van-swipe-item>
      </van-swipe>

      <div class="nav">
        <ul style="width:100%">
          <li class="title-nav">
            <img src="@/assets/images/01.jpg" />
            <p>限时抢购</p>
          </li>
          <li class="title-nav">
            <img src="@/assets/images/02.jpg" />
            <p>积分商城</p>
          </li>
          <li class="title-nav">
            <img src="@/assets/images/03.jpg" />
            <p>联系我们</p>
          </li>
          <li class="title-nav" @click="goSort">
            <img src="@/assets/images/04.jpg" />
            <p>商品分类</p>
          </li>
        </ul>
      </div>
    </header>

    <div class="advite">
      <div class="ad">
        <p class="spike">
          <i class="iconfont icon-ceyandaojishitubiao"></i>&nbsp;限时秒杀
        </p>
        <span class="word">每天零点场&nbsp;好货秒不停</span>
        <p class="countdown">
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span class="block">{{ timeData.hours | getTime}}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes | getTime}}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds | getTime}}</span>
            </template>
          </van-count-down>
          <img src="@/assets/images/miaosha.jpg" alt />
        </p>
        <img class="adfirst" :src="ad[0].img" alt />
      </div>

      <div class="top">
        <p class="spike">品牌上新</p>
        <span class="word">每日9点&nbsp;抢大牌</span>
        <img class="adtwo" :src="ad[1].img" alt />
      </div>

      <div class="left">
        <p class="spike">每日十件</p>
        <span class="word">只为你选好货</span>
        <img class="adthree" :src="ad[2].img" alt />
      </div>

      <div class="right">
        <p class="spike">拼啊</p>
        <span class="word">超级好价拼团</span>
        <img class="adthree" :src="ad[3].img" alt />
      </div>
    </div>

    <div class="billiing">
      <img class="blImg" :src="blImg" />
    </div>

    <div class="main">
      <van-tabs type="card">
        <van-tab title="热门推荐">
          <ul class="commode">
            <li
              class="recommend"
              @click="goDetails(item.id)"
              v-for="item in recommend"
              :key="item.id"
            >
              <img v-lazy="item.img" :key="item.id" />
              <div class="commode-right">
                <h3>{{item.title}}</h3>
                <h4>{{item.price}}</h4>
                <p>已售{{item.sold}}件</p>
                <button>立即抢购</button>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="发现好货">
          <ul class="commode">
            <li class="recommend" @click="goDetails(item.id)" v-for="item in find" :key="item.id">
              <img v-lazy="item.img" :key="item.id" />
              <div class="commode-right">
                <h3>{{item.title}}</h3>
                <h4>{{item.price}}</h4>
                <p>已售{{item.sold}}件</p>
                <button>立即抢购</button>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="只看专场">
          <ul class="commode">
            <li
              class="recommend"
              @click="goDetails(item.id)"
              v-for="item in session"
              :key="item.id"
            >
              <img v-lazy="item.img" :key="item.id" />
              <div class="commode-right">
                <h3>{{item.title}}</h3>
                <h4>{{item.price}}</h4>
                <p>已售{{item.sold}}件</p>
                <button>立即抢购</button>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="只看商品">
          <ul class="commode">
            <li
              class="recommend"
              @click="goDetails(item.id)"
              v-for="item in commodity"
              :key="item.id"
            >
              <img v-lazy="item.img" :key="item.id" />
              <div class="commode-right">
                <h3>{{item.title}}</h3>
                <h4>{{item.price}}</h4>
                <p>已售{{item.sold}}件</p>
                <button>立即抢购</button>
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import "@/assets/css/resetui.css";
export default {
  data() {
    return {
      active: 0,
      list: [
        {
          id: 1,
          name: "推荐"
        },
        {
          id: 2,
          name: "女装"
        },
        {
          id: 3,
          name: "鞋包"
        },
        {
          id: 4,
          name: "居家"
        },
        {
          id: 5,
          name: "母婴儿童"
        },
        {
          id: 6,
          name: "美食"
        },
        {
          id: 7,
          name: "男装"
        },
        {
          id: 8,
          name: "医药"
        },
        {
          id: 9,
          name: "数码"
        }
      ],
      images: [
        {
          id: 101,
          img: require("@/assets/images/l1.png")
        },
        {
          id: 102,
          img: require("@/assets/images/l2.png")
        },
        {
          id: 103,
          img: require("@/assets/images/l3.png")
        },
        {
          id: 104,
          img: require("@/assets/images/l4.png")
        }
      ],
      time: 10 * 60 * 60 * 1000,
      blImg: require("@/assets/images/blImg.jpg"),
      recommend: [
        {
          id: 121,
          img: require("@/assets/images/shop1.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 122,
          img: require("@/assets/images/shop2.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 123,
          img: require("@/assets/images/shop3.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 124,
          img: require("@/assets/images/shop1.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 125,
          img: require("@/assets/images/shop2.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        }
      ],
      find: [
        {
          id: 131,
          img: require("@/assets/images/shop2.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 132,
          img: require("@/assets/images/shop3.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 133,
          img: require("@/assets/images/shop1.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 134,
          img: require("@/assets/images/shop2.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 135,
          img: require("@/assets/images/shop3.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        }
      ],
      session: [
        {
          id: 141,
          img: require("@/assets/images/shop1.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 142,
          img: require("@/assets/images/shop2.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 143,
          img: require("@/assets/images/shop3.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 144,
          img: require("@/assets/images/shop1.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 145,
          img: require("@/assets/images/shop2.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        }
      ],
      commodity: [
        {
          id: 151,
          img: require("@/assets/images/shop2.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 152,
          img: require("@/assets/images/shop3.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 153,
          img: require("@/assets/images/shop1.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 154,
          img: require("@/assets/images/shop2.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        },
        {
          id: 155,
          img: require("@/assets/images/shop3.jpg"),
          title: "雅思兰黛染发膏60ml",
          price: "￥123",
          sold: "800"
        }
      ],
      ad: [
        {
          img: require("@/assets/images/home01.jpg")
        },
        {
          img: require("@/assets/images/home02.jpg")
        },
        {
          img: require("@/assets/images/home03.jpg")
        },
        {
          img: require("@/assets/images/home04.jpg")
        }
      ]
    };
  },
  methods: {
    goSort() {
      // console.log(this);
      this.$router.push("/sort");
    },
    goDetails(id) {
      // console.log(this)
      this.$router.push({
        path: "/details",
        query: {
          id
        },
      });
    }
  },
  mounted() {},
  filters: {
    getTime(d) {
      // console.log(d);
      let newTime = d.toString().padStart(2, "0");
      return newTime;
    }
  }
};
</script>

<style lang="" scoped>
@import url("../../assets/css/home.css");
</style>