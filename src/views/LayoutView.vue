<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="container">
    <RouterView name="Header" />
    <div class="row">
      <RouterView class="col-3" name="NavBar" />
      <RouterView class="col-9" />
    </div>
    <RouterView class="row" name="Footer" />
  </div>
</template>

<style scoped></style>
