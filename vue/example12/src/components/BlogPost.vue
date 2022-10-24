<script setup>
// defineProps 是一个仅 <script setup> 中可用的编译宏命令
// 声明了一个组件可以设置的所有属性
defineProps(["title"]);
// 声明了一个组件可能触发的所有事件
defineEmits(["enlarge-text"]);
</script>

<template>
  <div>
    <h4>{{ title }}</h4>
    <!-- 通过调用 $emit 方法，传入事件名称来抛出一个事件 -->
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
