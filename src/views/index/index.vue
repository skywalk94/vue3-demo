<template>
  <div class="box">
    <h1 class="title">{{ title }}</h1>
    <button @click="changeVal()">改变值</button>
    <button @click="goMain()">跳转</button>
    <button @click="popShow()">打开子组件弹窗</button>
    <popUp v-model:isShow="isShow">弹窗内容</popUp>
  </div>
</template>

<script>
  import {
    reactive,
    onMounted,
    toRefs
  } from "vue";
  import popUp from "../../components/popUp"
  import {
    useRouter
  } from "vue-router";
  import axiosApi from "../../axios"
  export default {
    components: {
      popUp
    },
    setup() {
      const router = useRouter()
      const that = reactive({
        title: "首页",
        isShow: false
      })
      onMounted(() => {
        getApi()
      });
      const getApi = async () => {
        let res = await axiosApi("getClassSchedule", {}, "post")
        // console.log(res)
      }
      const methods = {
        changeVal() {
          that.title = "主页"
        },
        popShow() {
          that.isShow = true
        },
        goMain() {
          router.push({
            path: "/main",
            query: {
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