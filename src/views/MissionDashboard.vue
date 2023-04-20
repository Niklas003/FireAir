<template>
            <DateTime></DateTime>
    <div class="px-8">
        <button class="absolute bottom-8 text-white font-bold p-4 rounded-md bg-red-600 text-2xl"><span class="material-symbols-rounded relative top-1 text-2xl">add</span> Neuer Trupp</button>
    </div>
</template>
<script setup lang="ts">
import DateTime from '@/components/DateTime.vue';
import { defineProps } from 'vue';

const props = defineProps({
    missionID: String,
});
</script>