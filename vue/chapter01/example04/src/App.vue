<script setup>
import { ref, computed } from "vue";

const author = ref({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

// 计算属性，接受一个 getter，返回值为一个计算属性 ref，默认是只读的
const publishedBooksMessage = computed(() => {
  return author.value.books.length > 0 ? "Yes" : "No";
});

const firstName = ref("John");
const lastName = ref("Doe");

// 注意，Getter 不应该有副作用
// 计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算
const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
</script>

<template>
  <div>
    <p>Has published books:</p>
    <!--在模版中同样会自动解包-->
    <!--计算属性值会基于其响应式依赖被缓存，一个计算属性仅会在其响应式依赖更新时才重新计算-->
    <!--如果定义为一个函数，那么每次重渲染发生时都会再次执行-->
    <span>{{ publishedBooksMessage }}</span>
    <p>{{ fullName }}</p>
  </div>
</template>

<style scoped></style>
