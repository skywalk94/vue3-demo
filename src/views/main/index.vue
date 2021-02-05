<template>
  <div>
    <h1>第二页{{value}}</h1>
    <p>{{name}}</p>
    <inputBox v-model:value="name"></inputBox>
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
  import inputBox from "../../components/inputBox"
  export default {
    components: {
      inputBox
    },
    setup() {
      const route = useRoute()
      const that = reactive({
        value: route.query.id,
        name: 123
      })
      onMounted(() => {})
      return {
        ...toRefs(that)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>