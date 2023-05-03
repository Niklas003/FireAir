<template>
    <div class="flex">
        <DateTime class="inline-block mr-12"></DateTime>
        <span class="text-white text-4xl mt-8">Einsatz <span class="font-light">#{{ props.missionID }}</span></span>
    </div>
    <div class="px-8">
        <div class="flex justify-between">
            <div class="p-2 mx-2 rounded-md border-2 border-gray-400 bg-white w-64 h-48">
                <span class="text-slate-950 font-bold text-2xl mb-4">{{ troopData?.troopName }}Angriffstrupp 5401</span>
                <hr>
                <div>
                    <span class="material-symbols-rounded relative top-1 text-2xl">group</span>
                    <span class="mx-2 text-lg">M. Geesen</span>
                    <span class="mx-2 text-lg">M. Speyer</span>
                </div>
                <div>
                    <span class="material-symbols-rounded relative top-1 text-2xl">timer</span>
                </div>
                <div>
                    <span class="material-symbols-rounded relative top-1 text-2xl">adjust</span>
                </div>
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