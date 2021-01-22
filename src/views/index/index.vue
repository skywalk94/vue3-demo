<template>
  <div class="box">
    <h1 class="title">{{ title }}</h1>
    <button @click="changeVal()">改变值</button>
    <button @click="goMain()">跳转</button>
    <button @click="popShow()">打开子组件弹窗</button>
    <popUp :isShow="isShow" @close="closePop">弹窗值</popUp>
  </div>
</template>

<script>
  import {
    reactive,
    onMounted,
    toRefs
  } from "vue";
  import popUp from "../../components/popUp/popUp"
  import router from "../../router";
  export default {
    components: {
      popUp
    },
    setup() {
      const that = reactive({
        title: "首页",
        isShow: false
      })
      onMounted(() => {});
      const methods = {
        changeVal() {
          that.title = "主页"
        },
        popShow() {
          that.isShow = true
        },
        closePop() {
          that.isShow = false
        },
        goMain() {
          router.push({
            path: "/main",
            prame: {
              id: 123
            }
          })
        }
      }
      return {
        ...toRefs(that),
        ...methods
      };
    },
  };
</script>

<style src="./index.less" lang="less" scoped>
</style>