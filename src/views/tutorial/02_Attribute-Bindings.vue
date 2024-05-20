<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <div>
    <h1 v-bind:class="titleClass">Make me red</h1>
    <!-- 此处添加一个动态 class 绑定 -->
  </div>
</template>

<style>
.title {
  color: red;
}
</style>
