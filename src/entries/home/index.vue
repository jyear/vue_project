<style lang="less">
.test {
  transform: translateX(30px);
}
</style>
<template>
  <div class="test">
    Index
    <span>{{a}}</span>
  </div>
</template>
<script lang='ts'>
export default {
  data() {
    return { a: 1 };
  },
  mounted() {
    console.log(this.$store.state.user.name);
    this.$store.dispatch("changeName");
    console.log(this.$store.state.user.name);
  }
};
</script>
