<script setup>
import { computed, ref } from "vue";

const parentMessage = ref("Parent");
const items = ref([{ message: "Foo" }, { message: "Bar" }]);
const myObject = ref({
  title: "How to do lists in Vue",
  author: "Jane Doe",
  publishedAt: "2016-04-10",
});
const numbers = ref([1, 2, 3, 4, 5]);

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 == 0);
});

// NOTE reverse() 和 sort() 会改变数组，应该创建一个副本
</script>

<template>
  <div>
    <ul>
      <!--Vue 默认按照“就地更新”的策略来更新通过 v-for 渲染的元素列表。
        当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素-->
      <!--为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，需要为每个元素对应的块提供一个唯一的 key attribute-->
      <!--不要用对象作为 v-for 的 key，不同 v-for 间的 key 也不能重复-->
      <!--NOTE 默认模式是高效的，但只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况-->
      <li v-for="(item, index) in items" :key="index + 3">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>

      <!--解构-->
      <li v-for="({ message }, index) in items" :key="index + 6">
        {{ parentMessage }} - {{ index }} - {{ message }}
      </li>

      <li v-for="value in myObject" :key="value">
        {{ value }}
      </li>
      <!--注意顺序-->
      <li v-for="(value, key) in myObject" :key="key">
        {{ key }}: {{ value }}
      </li>

      <li v-for="(value, key, index) in myObject" :key="index">
        {{ index }}: {{ key }}: {{ value }}
      </li>

      <!--NOTE 用另一个包含部分重叠对象的数组来做替换，Vue 实现了一些巧妙的方法来最大化对 DOM 元素的重用，仍会是一种非常高效的操作-->

      <!--使用计算属性-->
      <li v-for="n in evenNumbers" :key="n + 555">{{ n }}</li>
    </ul>

    <!--[1, 10] 范围重复-->
    <p v-for="n in 10" :key="n">{{ n }}</p>

    <!--TODO 在组件上使用 v-for-->
  </div>
</template>

<style scoped></style>
