<template>
  <div class="bg-dark min-h-screen">
  <app-header></app-header>
  <router-view/>
  </div>
</template>
<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
</script>
<style>
.bg-dark{
  background-color: #22272A;
}

.bg-light{
  background-color: #FFFF;
}
</style>