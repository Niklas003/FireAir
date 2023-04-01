<template>
    <div>
        <div class="flex flex-col">
            <input required placeholder="AGT Überwachung" type="text" class="invalid:bg-red-500/20 outline outline-offset-0 outline-2 outline-red-500 valid:bg-green-500/20 valid:outline-green-500 my-4 mt-8 p-2 rounded-md default:bg-white/70 text-xl text-white"
            :value="surveillance" @input="e => surveillance = (e?.target as any)?.value">
            <input required placeholder="Einsatzleitung" type="text" class="invalid:bg-red-500/20 outline outline-offset-0 outline-2 outline-red-500 valid:bg-green-500/20 valid:outline-green-500 my-4 p-2 rounded-md default:bg-white/70 text-xl text-white"
            :value="management" @input="e => management = (e?.target as any)?.value">
            <h2 class="text-white text-xl"><b>Datum: </b> {{ dateStr }}</h2>
            <h2 class="text-white text-xl"><b>Uhrzeit: </b> {{ timeStr }}</h2>
        </div>

        <div class="flex flex-row mt-8 justify-between">
            <router-link to="/" class="text-white border-2 border-white p-2 rounded-md">zurück</router-link>
            <router-link to="/" v-if="surveillance.length > 3 && management.length > 3" class="font-semibold bg-green-500/10 text-green-500 border-2 border-green-500 p-2 rounded-md">Weiter</router-link>
            <div v-else class="font-semibold bg-white/10 text-white/30 border-2 border-white/10 p-2 rounded-md">Weiter</div>
        </div> 
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineEmits } from 'vue';

const emits =  defineEmits(['date', 'time', 'surveillance', 'management']);

const dateStr = ref('');
const timeStr = ref('');

emits("time",timeStr);
emits("date", dateStr)

const surveillance = ref('');
const management = ref('');

onMounted(() => {
    getCurrentDate();
});

function getCurrentDate(){
    let dateTime = new Date();
    dateStr.value = dateTime.toLocaleDateString('de-DE');
    timeStr.value = dateTime.toLocaleTimeString();

}

</script>