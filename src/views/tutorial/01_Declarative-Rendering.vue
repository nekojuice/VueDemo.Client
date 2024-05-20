<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'

const catsay = ref('hi')
const dogsay = reactive({ wof: 'rrrrrrrrr' })
</script>

<template>
  <div>
    <h1>{{ catsay }}</h1>
    <h2>
      {{ dogsay.wof }}
    </h2>
  </div>
</template>
