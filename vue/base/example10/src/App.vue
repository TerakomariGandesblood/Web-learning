<script setup>
import { ref, watch } from "vue";

const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");

// 可以使用 watch 函数在每次响应式状态发生变化时触发回调函数
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";
  } else {
    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    }
  }
});
</script>

<template>
  <div>
    <p>Ask a yes/no question: <input type="text" v-model="question" /></p>
    <p>{{ answer }}</p>
  </div>
</template>

<style scoped></style>
