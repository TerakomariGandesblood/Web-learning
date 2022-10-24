<script setup>
import { ref } from "vue";

const text = ref("");
const checked = ref(false);
const checkedNames = ref([]);

const selected = ref("A");

const options = ref([
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" },
]);

const msg = ref("");
</script>

<template>
  <div>
    <form>
      <input type="text" v-model="text" placeholder="edit me" />
      <p>{{ text }}</p>
    </form>

    <form>
      <input type="checkbox" name="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </form>

    <form>
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </form>

    <form>
      <select v-model="selected">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.text"
        >
          {{ option.text }}
        </option>
      </select>
      <div>Selected: {{ selected }}</div>
    </form>

    <form>
      <!-- true-value 和 false-value 是 Vue 特有的 attributes，仅支持和 v-model 配套使用 -->
      <input type="checkbox" v-model="msg" true-value="yes" false-value="no" />
    </form>

    <form>
      <!-- 在 "change" 事件后同步更新而不是 "input" -->
      <input v-model.lazy="msg" />
      <div>{{ msg }}</div>
      <!-- .number 转换为数字， 如果该值无法被 parseFloat() 处理，那么将返回原始值。
           number 修饰符会在输入框有 type="number" 时自动启用。
           .trim 去除两端空格-->
    </form>

    <!-- TODO 在组件上使用 v-model -->
  </div>
</template>

<style scoped></style>
