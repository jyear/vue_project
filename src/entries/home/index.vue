<style lang="less">
</style>
<template>
  <div>Index{{a}}</div>
</template>
<script lang='ts'>
export default {
  data() {
    return { a: 2 };
  },
  mounted() {
    console.log(this.$store.getters.getName);
    this.$store.dispatch("changeName");
    console.log(this.$store.getters.getName);
  }
};
</script>
