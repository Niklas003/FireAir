<template>
    <div class="p-12">
        <router-link to="/newmission" class="hover:underline text-white text-lg"><span class="material-symbols-rounded relative top-0.5 text-sm">arrow_back_ios</span> zurück</router-link>
        <div class="bg-sky-950 p-4 rounded-md">
            <h1 class="text-white font-bold text-2xl">Einsatzdaten</h1>
            <p>Datum:</p>
            <p>Zeit:</p>
            <p>AGT-ÜberWachung: </p>
        </div>   
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

var missionData = ref<string[]>([''])

</script>