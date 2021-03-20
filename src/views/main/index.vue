<template>
  <div>
    <navbar>{{ title }}</navbar>
    <h1>第二页{{ value }}</h1>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRoute } from "vue-router";
import navbar from "../../components/navbar";
export default {
  components: {
    navbar,
  },
  setup() {
    const route = useRoute();
    const that = reactive({
      value: route.query.id,
      title: "main页",
    });
    onMounted(() => {});
    return {
      ...toRefs(that),
    };
  },
};
</script>

<style lang="less" scoped>
</style>