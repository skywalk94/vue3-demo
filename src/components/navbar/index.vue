<template>
  <teleport to="#title">
    <div class="box">
      <slot>标题</slot>
    </div>
  </teleport>
</template>
<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
  setup(props, context) {
    const that = reactive({});
    onMounted(() => {});
    const methods = {};
    return {
      ...toRefs(that),
      ...methods,
    };
  },
};
</script>
<style src='./index.less' lang='less' scoped>
</style>