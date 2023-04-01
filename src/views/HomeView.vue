<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="cursor-pointer bg-red-600 h-1/4 min-h-max w-1/4 rounded-md text-4xl text-white text-center p-10 my-8 font-bold">Neuer Einsatz</div>
      <div class="cursor-pointer bg-transparent border-white border-4 h-1/4 min-h-max w-1/4 rounded-md text-2xl text-white text-center p-8 my-8 font-semibold">Einsatz laden</div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>
