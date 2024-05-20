<!-- <script setup>
// 使用ref()函數來宣告響應式狀態
const count = ref(9485)
console.log(count) // { value: 0 }
console.log(count.value) // 0
count.value++
console.log(count.value) // 1 -->

<script>
// 自訂setup()時，srcipt標籤內的setup要拿掉
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(9485)

    // 複雜的邏輯也可以選擇寫在 setup()
    function increment() {
      // 在 JavaScript 中需要 .value
      count.value++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      count,
      increment
    }
  }
}
</script>
<template>
  <div>
    <ol>
      <li>
        <h3>宣告響應式狀態</h3>
        <p># 不需要附加.value ( count.vaule )，會自動解構</p>
        <p>
          #
          <a
            href="https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#caveat-when-unwrapping-in-templates"
            >自動解構的參考資料</a
          >
        </p>
        <p>變數數字count: {{ count }}</p>
        <br />
      </li>

      <li>
        <h3>事件監聽器中改變一個ref</h3>
        <p># 效果: 點了按鈕+1</p>
        <div>
          <p># 邏輯寫在 attribute (已註解區塊)</p>
          <!-- <button @click="count++">
            {{ count }}
          </button> -->
          <p># 邏輯寫在setup()</p>
          <button @click="increment">
            {{ count }}
          </button>
          <br />
        </div>
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
