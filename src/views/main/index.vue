<template>
  <div>
    <navbar>标题</navbar>
    <h1>上个组件传递的动态id{{ value }}</h1>
    <span>{{ num }}</span>
    <button @click="mutNum()">mutations的方法</button>
    <button @click="actNum()">actions的方法</button>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import navbar from "../../components/navbar";
export default {
  components: {
    navbar,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      value: route.query.id,
      title: "main页",
      num: 0,
    });
    onMounted(() => {
      state.num = store.state.num;
    });

    const mutNum = () => {
      store.commit("add");
      state.num = store.state.num;
    };

    const actNum = () => {
      store.dispatch("addNum");
      state.num = store.state.num;
    };

    return {
      mutNum,
      actNum,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
</style>