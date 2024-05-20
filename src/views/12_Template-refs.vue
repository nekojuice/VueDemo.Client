<script setup>
import { ref, onMounted } from 'vue'

const input = ref(null)
</script>
<template>
  <div>
    <H1>模板</H1>
    <input ref="input" />
    <button onclick="javascript:console.log)">btn</button>
  </div>
</template>

<style scoped></style>
