<template>
  <div class="box">
    <h1 class="title">{{ data.state }}{{ data.title }}</h1>
    <button @click="goMain()">跳转</button>
  </div>
</template>

<script>
  import {
    onMounted
  } from "vue";
  import router from "../../router";
  export default {
    setup() {
      const data = {
        state: 100,
        title: "首页",
      };
      onMounted(() => {});

      function goMain() {
        router.push({
          path: "/main",
          query: {
            id: 123
          }
        });
      }
      return {
        data,
        goMain,
      };
    },
  };
</script>

<style src="./index.less" lang="less" scoped>
</style>