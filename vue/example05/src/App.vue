<script setup>
import { ref, computed } from "vue";

const isActive = ref(false);
const hasError = ref(true);

const classObject = ref({
  active: true,
  text_danger: false,
});

const classObject2 = computed(() => ({
  active: isActive.value && !hasError.value,
  text_danger: error.value && error.value.type === "fatal",
}));
</script>

<template>
  <div>
    <!--active 是否存在取决于数据属性 isActive 的真假值-->
    <div :class="{ active: isActive }"></div>
    <!--可以和 class attribute 共存，“static active”-->
    <p class="static" :class="{ active: isActive, text_danger: hasError }">
      你好世界
    </p>
    <!--可以直接绑定一个对象-->
    <p :class="classObject">你好世界</p>
    <!--绑定数组-->
    <div :class="[isActive, hasError]"></div>
    <!--可以嵌套对象-->
    <div :class="[{ active: isActive }, hasError]"></div>
    <!--TODO 在组件上使用-->
  </div>
</template>

<style scoped>
.active {
  font-size: 30px;
  color: green;
}

.text_danger {
  font-size: 40px;
  color: red;
}
</style>
