<script setup>
import { useCatStore } from '@/stores/catStore.js'

const catStore = useCatStore()

// /**
//  *
//  * @param {number} a
//  * @param {number} b
//  * @param {bool} operator, true時a+b, false時a-b
//  */
// function catcat(a, b, operator) {
//   return operator ? a + b : a - b
// }
</script>
<template>
  <div>
    <p>first meet pinia!!</p>
    <p>{{ catStore.behavor }}</p>
    <button type="button" @click="catStore.flipIsHappy">switch the cat mood</button>
    <router-link :to="{ name: 'page01' }">go to deep page!</router-link>
  </div>
</template>

<style scoped></style>
