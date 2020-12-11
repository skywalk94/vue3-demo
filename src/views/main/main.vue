<template>
  <div class="title">二级目录</div>
</template>

<script>
  export default {
    data: () => ({

    }),
    mounted() {
      console.log(this.$route.query.id) //123
    }
  };
</script>

<style src="./main.css" scoped>
</style>