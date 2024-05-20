<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })
</script>
<template>
  <div>
    <ol>
      <li>
        <h3>reactive() 代理響應</h3>
        <p># 使物件本身具有響應性</p>
        <p># 非原始值轉換為代理響應</p>
        <p># Proxy vs. Original</p>
        <p># 會是個Proxy(代理)，而非原始物件</p>
        <div>
          <button @click="state.count++">
            {{ state.count }}
          </button>
        </div>
        <p># 只有更新代理物件才會觸發更新，原物件不會</p>
        <br />
      </li>

      <li>
        <h3>reactive()的局限性</h3>
        <ol>
          <li>
            <p>不接受string、number或boolean原始型別</p>
          </li>
          <li><p>不能替換整個物件，更改參考位置，連結將消失</p></li>
          <li><p>解構傳給變數時，連結將消失</p></li>
        </ol>
        <p style="color: red">有甚麼情況要一次記一整包(或好多包)響應物件? 統計圖表?</p>
        <p style="color: red">用到更多再研究</p>
        <br />
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
