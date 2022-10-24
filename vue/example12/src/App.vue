<script setup>
import { ref } from "vue";

import ButtonCounter from "./components/ButtonCounter.vue";
import BlogPost from "./components/BlogPost.vue";
import AlertBox from "./components/AlertBox.vue";
import Home from "./components/Home.vue";
import Posts from "./components/Posts.vue";
import Archive from "./components/Archive.vue";

const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
]);

const postFontSize = ref(2);

const currentTab = ref("Home");

const tabs = {
  Home,
  Posts,
  Archive,
};
</script>

<template>
  <div>
    <h1>Here is a child component!</h1>
    <!-- 每当使用一个组件，就创建了一个新的实例 -->
    <!-- 推荐为子组件使用 PascalCase 的标签名 -->
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :title="post.title"
        :key="post.id"
        @enlarge-text="postFontSize += 0.1"
      ></BlogPost>
      <AlertBox>你好世界</AlertBox>
    </div>

    <!-- 动态组件 -->
    <button v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>

<style scoped></style>
