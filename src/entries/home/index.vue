<style lang="less">
.test {
  transform: translateX(30px);
}
</style>
<template>
  <div class="test">
    Index
    <span @click="clickSpan">{{a}}{{age}}</span>
  </div>
</template>
<script lang='ts'>
interface Data {
  a: number;
  age: number;
}
export default {
  data(): Data {
    return {
      a: 1,
      age: this.$store.state.user.age
    };
  },
  methods: {
    clickSpan(): void {
      alert(this.a);
    }
  },
  mounted(): void {
    console.log(this.$store.state.user.name);
    this.$store.dispatch("changeName");
    console.log(this.$store.state);
    console.log(this.$store.getters.getName);
  }
};
</script>
