<script setup>
import store from "./store";
</script>

<template>
  <div>
    <button @click="store.commit('increment')">
      {{ store.state.count }}
    </button>
  </div>
</template>

<style scoped></style>
