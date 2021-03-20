<template>
  <div class="pop">
    <transition name="fadeBg">
      <div class="pop-bg" v-if="isShow" @click="closePop"></div>
    </transition>
    <transition name="fadeUp">
      <div class="pop-up" v-if="isShow">
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import { reactive, toRefs, watchEffect } from "vue";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const that = reactive({});
    // 可监听父组件的变化
    watchEffect(() => {
      // console.log(props.isShow)
    });
    const methods = {
      closePop() {
        context.emit("update:isShow", false);
      },
    };
    return {
      ...toRefs(that),
      ...methods,
    };
  },
};
</script>

<style src="./index.less" lang="less" scoped>
</style>