<script setup>
// 在单页面应用中，客户端的 JavaScript 可以拦截页面的跳转请求，动态获取新的数据，然后在无需重新加载的情况下更新当前页面
// 在这类单页应用中，“路由”是在客户端执行的
// 使用 Vue Router 时，需要做的就是将组件映射到路由上，让 Vue Router 知道在哪里渲染它们
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <h1>Hello App!</h1>

    <p>
      <!-- 使用 router-link 组件进行导航 -->
      <router-link to="/">Go to Home</router-link>
      <br />
      <router-link to="/about">Go to About</router-link>
      <br />
      <router-link to="/user/123">Go to User</router-link>
    </p>

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
