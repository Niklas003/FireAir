<template>
    <div>
        <div class="flex flex-col">
            <input required placeholder="AGT Überwachung" type="text" class="invalid:bg-red-500/20 outline outline-offset-0 outline-2 outline-red-500 valid:bg-green-500/20 valid:outline-green-500 my-4 mt-8 p-2 rounded-md default:bg-white/70 text-2xl text-white">
            <input required placeholder="Einsatzleitung" type="text" class="invalid:bg-red-500/20 outline outline-offset-0 outline-2 outline-red-500 valid:bg-green-500/20 valid:outline-green-500 my-4 p-2 rounded-md default:bg-white/70 text-2xl text-white">
            <h2 class="text-white text-2xl"><b>Datum: </b> {{ dateStr }}</h2>
            <h2 class="text-white text-2xl"><b>Uhrzeit: </b> {{ timeStr }}</h2>
        </div>

        <div class="flex flex-row mt-8">
            <router-link to="/" class="text-white border-2 boder-white p-2 rounded-md">zurück</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

var dateStr = ref('');
var timeStr = ref('');

onMounted(() => {
    getCurrentDate();
});

function getCurrentDate(){
    let dateTime = new Date();
    dateStr.value = dateTime.toLocaleDateString('de-DE');
    timeStr.value = dateTime.toLocaleTimeString();

}

</script>