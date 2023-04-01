<template>
    <div class="p-12">
        <h1 class="text-4xl text-white mb-12">Neuer Einsatz</h1>
        <MissionInputP1 placeholder="AGT Überwachung" @user-input="(userInput: string) => getEmits(userInput, 0)"></MissionInputP1>
        <MissionInputP1 placeholder="Einsatzleitung" @user-input="(userInput: string) => getEmits(userInput, 1)"></MissionInputP1>
        <MissionInputP1 placeholder="Stichwort" @user-input="(userInput: string) => getEmits(userInput, 2)"></MissionInputP1>
        <MissionInputP1 placeholder="Ort" @user-input="(userInput: string) => getEmits(userInput, 3)"></MissionInputP1>

        <h2 class="text-white text-xl"><b>Datum: </b> {{ dateStr }}</h2>
        <h2 class="text-white text-xl"><b>Uhrzeit: </b> {{ timeStr }}</h2>
        <p class="text-md text-white">Einsatz ID: #{{generateID()}}</p>
    </div>

    <div class="flex flex-row justify-between mx-12">
            <router-link to="/" class="rounded-md p-2 border-2 border-white hover:bg-white/10 text-white text-lg">zurück</router-link>
            <button class="rounded-md p-2 border-2 border-green-500 text-green-500 text-lg">Vorerst Überspringen</button>
            <router-link to="/" v-if="allInputsSet()" class="rounded-md p-2 border-2 border-green-500 bg-green-500/10 text-green-500 text-lg">Weiter</router-link>
            <button v-else class="rounded-md p-2 border-2 border-green-500/20 bg-green-500/10 text-green-500/10 text-lg">Weiter</button>
    </div>
</template>

<script setup lang="ts">
import MissionInputP1 from '@/components/MissionInputP1.vue';
import { onMounted, ref } from 'vue';

const dateStr = ref('');
const timeStr = ref('');
var checkArr = ref<boolean[]>([]);

function generateID(){
    return Date.now()
}

onMounted(()=>{
    getCurrentDate();
});

function getEmits(userInput: string, stringID: number){
    checkArr.value[stringID] = true;
}

function allInputsSet(): boolean{
    
    return checkArr.value[0] && checkArr.value[1] && checkArr.value[2] && checkArr.value[3]? true: false;
}

function getCurrentDate(){
    let dateTime = new Date();
    dateStr.value = dateTime.toLocaleDateString('de-DE');
    timeStr.value = dateTime.toLocaleTimeString();

}

</script>