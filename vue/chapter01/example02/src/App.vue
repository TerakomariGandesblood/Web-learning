<script setup>
let msg = "Hello World!";
let html_str = '<p style="color: red">This should be red.</p>';
let div_id = 10;
const objectOfAttrs = {
  id: "container",
  class: "wrapper",
};
function func() {
  return "string";
}
let check = false;
function onClick() {
  alert("click");
}
let attributeName = "id";
function onSubmit() {}
</script>

<!--Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上-->
<!--Vue 会将模板编译成高度优化的 JavaScript 代码-->
<!--结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作-->
<template>
  <!--template root 只能有一个元素-->
  <div>
    <!--最基本的数据绑定：文本插值，使用“Mustache”语法 (即双大括号)-->
    <p>Message: {{ msg }}</p>
    <!--解释为字符串-->
    <p>{{ html_str }}</p>
    <!--插入一段 HTML，<span><p>...</p></span>-->
    <!--指令由 v- 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute-->
    <!--NOTE 动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞-->
    <span v-html="html_str"></span>
    <!--双大括号不能在 HTML attributes 中使用，想要响应式地绑定一个 attribute，应该使用 v-bind 指令-->
    <!--v-bind 指令指示 Vue 将元素的 id attribute 与组件的 dynamicId 属性保持一致。
      如果绑定的值是 null 或者 undefined，那么该 attribute 将会从渲染的元素上移除-->
    <!--id 称为指令参数-->
    <div v-bind:id="div_id"></div>
    <!--简写（更常用）-->
    <div :id="div_id"></div>
    <!--一次绑定多个 attributes-->
    <div v-bind="objectOfAttrs"></div>
    <!--可以绑定 JavaScript 表达式-->
    <p>{{ div_id + 1 }}</p>
    <div v-bind:id="div_id + 1"></div>
    <!--因为组件每次更新时都会调用，因此不应该产生任何副作用-->
    <p>{{ func() }}</p>
    <!--NOTE 模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表-->

    <!--基于表达式 seen 的值的真假来移除/插入该 <p> 元素-->
    <p v-if="check">Now you see me</p>
    <!--监听 DOM 事件-->
    <button v-on:click="onClick">Button</button>
    <!--简写-->
    <button @click="onClick">Button</button>
    <!--动态参数，指令参数山也可以使用 JavaScript 表达式，但只能是字符串或是 null，如果是 null，则移除该属性-->
    <div v-bind:[attributeName]="10"></div>
    <!--修饰符，表明指令需要以一些特殊的方式被绑定-->
    <!--.prevent 修饰符会告知 v-on 指令对触发的事件调用 event.preventDefault()-->
    <form @submit.prevent="onSubmit"></form>
  </div>
</template>

<style scoped></style>
