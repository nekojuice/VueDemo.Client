<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="container border border-primary">
    <RouterView name="Header" />
    <div class="row border border-danger">
      <RouterView class="col-3 border border-info" name="NavBar" />
      <RouterView class="col-9 border border-warning" />
    </div>
    <RouterView class="row border border-primary" name="Footer" />
  </div>
</template>

<style scoped></style>
