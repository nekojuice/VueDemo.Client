<script setup>
import { ref } from 'vue'

const count = ref(0)
function increment() {
  // 更新组件状态
  count.value++
}
</script>

<template>
  <!-- 使此按钮生效 -->
  <div>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>
