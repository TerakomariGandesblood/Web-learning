<script setup>
import { ref } from "vue";

const awesome = ref(true);
</script>

<template>
  <div>
    <button @click="awesome = !awesome">Toggle</button>
    <!--表达式为真时渲染，如果为假则什么都不做，首次变为 true 时渲染-->
    <h2 v-if="awesome">Vue is awesome!</h2>
    <!--必须在 v-if 或者 v-else-if 元素后面-->
    <h2 v-else>Oh no 😢</h2>
    <!--渲染但是隐藏，频繁切换时应该使用-->
    <h2 v-show="awesome">Hello!</h2>
  </div>
</template>

<style scoped></style>
