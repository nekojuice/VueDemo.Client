<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div>
    <ol>
      <li>
        <h3>享受 script setup</h3>
        <div>
          <button @click="increment">
            {{ count }}
          </button>
        </div>
        <br />
      </li>

      <li>
        <h3>為什麼要使用ref？</h3>
        <p># 追蹤更新並重新渲染</p>
        <br />
      </li>

      <li>
        <h3>深層響應性</h3>
        <p>
          # Ref 可以持有任何類型的值，包括深層嵌套的物件、陣列或JavaScript 內建的資料結構，例如Map
        </p>
        <p># 都會偵測到</p>
        <br />
      </li>

      <li>
        <h3>DOM 更新時機</h3>
        <p>會在next tick重新渲染，避免被DOM更新轟炸</p>
        <p>使用await nextTick()，讓DOM更新後再執行後面程式(比方說刷新UI後才繼續...?)</p>
        <br />
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
