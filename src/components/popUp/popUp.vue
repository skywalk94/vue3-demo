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
    import {
        reactive,
        toRefs,
        watchEffect
    } from "vue";
    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false,
            },
        },
        setup(props, context) {
            const that = reactive({
                title: 123,
            })
            watchEffect(() => {})
            const closePop = () => {
                context.emit('close', false)
            }
            return {
                ...toRefs(that),
                closePop,
            }
        },
    }
</script>

<style src="./popUp.less" lang="less" scoped>
</style>