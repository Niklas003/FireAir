<template>
            <DateTime class="inline-block mr-12"></DateTime>
            <span class="text-white text-4xl">Einsatz <span class="font-light">#{{ props.missionID }}</span></span>
    <div class="px-8">
        <div class="flex justify-between">
            <div class="p-4 rounded-md bg-gray-300">
                <h1 class="text-slate-950 font-semibold text-xl">{{ troopData?.troopName }}Angriffstrupp 5401</h1>
                <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span class="mr-4 mt-4">M. Meier</span>
                <span>G. Geesen</span>
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