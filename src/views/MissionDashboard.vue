<template>
            <DateTime></DateTime>
    <div class="px-8">
        <div class="flex justify-between">
            <div class="p-4 rounded-md bg-gray-300">
                <h1 class="text-slate-950 font-semibold text-lg">{{ troopData?.troopName }}Boston</h1>
            </div>
        </div>

        <button class="absolute bottom-8 text-white font-bold p-4 rounded-md bg-red-600 text-2xl"><span class="material-symbols-rounded relative top-1 text-2xl">add</span> Neuer Trupp</button>
    </div>
</template>
<script setup lang="ts">
import DateTime from '@/components/DateTime.vue';
import { TroopData } from '@/Interfaces/TroopData';
import { defineProps, ref } from 'vue';

const troopData = ref<TroopData>()

const props = defineProps({
    missionID: String,
});

</script>