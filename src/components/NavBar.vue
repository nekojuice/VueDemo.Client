<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <ul>
      <li><RouterLink to="/layout">layout home</RouterLink></li>
    </ul>
    <hr />
    <h3>文件研究</h3>
    <ul>
      <li><RouterLink to="/layout/page01">1. 第一個空白頁</RouterLink></li>
      <li><RouterLink to="/layout/page02">2. 文字插值</RouterLink></li>
      <li><RouterLink to="/layout/page03/1">3. 響應式基礎1</RouterLink></li>
      <li><RouterLink to="/layout/page03/2">響應式基礎2</RouterLink></li>
      <li><RouterLink to="/layout/page03/3">響應式基礎3</RouterLink></li>
      <li><RouterLink to="/layout/page04">4. 計算屬性</RouterLink></li>
      <li><RouterLink to="/layout/page12">12. 模板</RouterLink></li>
    </ul>
    <hr />
    <h3>互動入門</h3>
    <ul>
      <li><RouterLink to="/layout/t1">01. 聲明式渲染</RouterLink></li>
      <li><RouterLink to="/layout/t2">02. Attribute 綁定</RouterLink></li>
      <li><RouterLink to="/layout/t3">03. 事件監聽</RouterLink></li>
      <li><RouterLink to="/layout/t4">04. 表單綁定</RouterLink></li>
      <li><RouterLink to="/layout/t5">05. 條件渲染</RouterLink></li>
      <li><RouterLink to="/layout/t6">06. 清單渲染</RouterLink></li>
      <li><RouterLink to="/layout/t7">07. 計算屬性</RouterLink></li>
      <li><RouterLink to="/layout/t8">08. 生命週期和模板引用</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped></style>
