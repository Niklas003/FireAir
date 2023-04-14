<template>
    <div class="p-4">
        <router-link to="/newmission" class="hover:underline text-white text-lg"><span class="material-symbols-rounded relative top-0.5 text-sm">arrow_back_ios</span> zurück</router-link>
        <div class="bg-sky-950 p-4 rounded-md mt-8 text-white">
            <h1 class="font-bold text-2xl">Einsatzdaten</h1>
            <p>Datum:</p>
            <p>Zeit:</p>
            <p>AGT-ÜberWachung: {{ props.missionID }}</p>
        </div>   
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
    missionID: String,
});

const missionData = ref<string[]>([''])

</script>