<template>
  <div>
    <DateTime></DateTime>
    <div class="flex flex-col items-center">

    <router-link to="/newmission" class="cursor-pointer bg-red-600 lg:w-1/4 md:w-1/2 rounded-md text-4xl text-white text-center p-10 my-8 font-bold">
      Neuer Einsatz
    </router-link>
      <div class="cursor-pointer bg-transparent border-white border-4 h-1/4 lg:w-1/4 md:w-1/2 rounded-md text-2xl text-white text-center p-8 my-8 font-semibold">Einsatz laden</div>
    </div>
</div>
</template>

<script setup lang="ts">
import DateTime from '@/components/DateTime.vue';

</script>
