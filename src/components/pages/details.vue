<template>
  <div>
    <v-title></v-title>
    <p>{{msg.name}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  created() {
    console.log(this.$route.query);
    this.$axios.get("../../../static/goods.json").then(res => {
      console.log(res);
      this.msg = res.data.goods[0];
      console.log(this.msg);
    });
  }
};
</script>
<style lang="" scoped>
</style>