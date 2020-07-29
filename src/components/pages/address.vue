<template>
  <div>
    <v-title></v-title>
    <div class="main">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
      <van-action-sheet v-model="show" title="新增收货地址">
        <div class="content">
          <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
          />
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
import "../../assets/js/areaData";
import areaData from "../../assets/js/areaData";
export default {
  data() {
    return {
      show: false,
      chosenAddressId: "1",
      areaList: areaData,
      searchResult: [],
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.show = true;
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  mounted() {},
};
</script>

<style lang="" scoped>
.main {
  height: calc(100vh - 0.9rem) !important;
  background-color: #fff;
  margin-top: 0.9rem;
}
.van-tag--danger {
  background-color: #f26b11;
}
.van-button {
  margin-bottom: 15px;
  background: #f26b11;
  border: none;
}

.van-button--danger {
  background-color: #f26b11;
}
.van-button--danger {
  color: #fff;
  background-color: #f26b11;
  border: 1px solid #f26b11;
}
</style>
