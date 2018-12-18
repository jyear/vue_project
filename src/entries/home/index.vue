<style lang="less">
.test {
  transform: translateX(30px);
}
</style>
<template>
  <div class="test">
    Index
    <span @click="clickSpan">{{a}}</span>
  </div>
</template>
<script lang='ts'>
export default {
  data(): any {
    return { a: 1 };
  },
  methods: {
    clickSpan() {
      alert(this.a);
    }
  },
  mounted(): void {
    console.log(this.$store.state.user.name);
    this.$store.dispatch("changeName");
    console.log(this.$store.state.user.name);
  }
};
</script>
