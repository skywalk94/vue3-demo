<template>
    <div class="input">
        <input type="text" @input="inputValue" />
    </div>
</template>
<script>
    import {
        reactive,
        toRefs,
        onMounted,
    } from 'vue';
    export default {
        props: {
            value: {
                type: [String, Number],
                default: "",
            },
        },
        setup(props, context) {
            const that = reactive({})
            onMounted(() => {})
            const methods = {
                inputValue(event) {
                    context.emit('update:value', event.target.value)
                }
            }
            return {
                ...toRefs(that),
                ...methods,
            }
        },
    }
</script>
<style src='./index.less' lang='less' scoped> </style>