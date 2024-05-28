<script setup>
import { useCatStore } from '@/stores/catStore'
const catStore = useCatStore()
</script>
<template>
  <div>
    <h1>加入空白頁</h1>
    <p>cat say hi</p>
    <hr />
    <h3>pinia test 新增</h3>
    <p>{{ catStore.behavor }}</p>
    <br />
    <button type="button" @click="catStore.flipIsHappy">switch the cat mood in deep page</button>
    <router-link :to="{ name: 'p01' }">back to pineapple page!</router-link>
  </div>
</template>

<style scoped></style>
