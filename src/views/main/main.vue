<template>
  <div>
    <h1>第二页</h1>
  </div>
</template>

<script>
  import {
    reactive,
    onMounted,
    toRefs
  } from "vue";
  import {
    useRoute
  } from "vue-router";
  export default {
    setup() {
      const route = useRoute()
      const that = reactive({})
      onMounted(() => {
        console.log(route.query.id)
      })
      return {
        ...toRefs(that)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>