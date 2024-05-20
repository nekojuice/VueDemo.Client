<script setup>
import { ref, onMounted } from 'vue'

const input = ref(null)
</script>
<template>
  <div>
    <h1>模板</h1>
    <p style="color: red">尚未研究</p>
    <input ref="input" />
    <button onclick="javascript:console.log)">btn</button>
  </div>
</template>

<style scoped></style>
