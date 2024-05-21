<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

// 掛載後執行
onMounted(() => {
  // 此时组件已经挂载。
  pElementRef.value.textContent = 123
})

// 初始化時，DOM還沒生成，只能放 null
const pElementRef = ref(null)
</script>

<!-- 掛載模板 -->
<template>
  <p ref="pElementRef">Hello</p>
</template>
