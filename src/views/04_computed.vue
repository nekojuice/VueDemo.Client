<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>
<template>
  <div>
    <h1>計算屬性</h1>
    <p># 避免在模板表達式寫太多邏輯</p>
    <p># const 變數名 = reactive({物件}) 記錄響應式物件</p>
    <p># const 變數名 = computed(表達式) 記錄計算方法屬性</p>
    <div>
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span>
    </div>
    <p># 自動追蹤響應依賴值的變動</p>
    <p># 計算屬性的ref也會自動解包，不需要加.value</p>
    <p style="color: red">暫停!!!!</p>
  </div>
</template>

<style scoped></style>
