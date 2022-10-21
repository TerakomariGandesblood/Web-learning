<!--<script setup> 中的顶层的导入和变量声明可在同一组件的模板中直接使用。
  可以理解为模板中的表达式和 <script setup> 中的代码处在同一个作用域中-->
<script setup>
import { ref } from "vue";

// 创建一个响应式对象或数组
// Vue 能够跟踪对响应式对象属性的访问与更改操作
// 如果不使用响应式对象则数据的更改不会更新 DOM

// 当更改响应式状态后，DOM 会自动更新。然而， DOM 的更新并不是同步的。
// Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次状态更改，每个组件都只需要更新一次
// NOTE 可以使用 nextTick() 等待一个状态改变后 DOM 更新完成
const state = ref({ count: 0 });

function increment() {
  state.value.count++;
}
</script>

<template>
  <div>
    <!--作为顶层属性时自动解包，无需使用 .value-->
    <button @click="increment">count: {{ state.count }}</button>
  </div>
</template>

<style scoped></style>
