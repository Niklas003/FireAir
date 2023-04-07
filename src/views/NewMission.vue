<template>
    <div class="p-12">
        <router-link to="/" class="rounded-md p-2 border-2 border-white hover:bg-white/10 text-white text-lg">--</router-link>

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
            <button class="rounded-md p-2 border-2 border-green-500 text-green-500 text-lg">Vorerst Überspringen</button>
            <router-link to="/" v-if="tocontinue" class="rounded-md p-2 border-2 border-green-500 bg-green-500/10 text-green-500 text-lg">Weiter</router-link>
            <button v-else class="rounded-md p-2 border-2 border-green-500/20 bg-green-500/10 text-green-500/10 text-lg">Weiter</button>
    </div>
</template>

<script setup lang="ts">
import MissionInputP1 from '@/components/MissionInputP1.vue';
import { onMounted, ref } from 'vue';

const dateStr = ref('');
const timeStr = ref('');
var tocontinue = ref<boolean>(false);
var checkArr = ref<boolean[]>([]);

function generateID(){
    let chr = "";
    let dateStamp = Date.now();
    console.log(dateStamp)
    let dateLength = String(dateStamp).length;
    if(dateLength % 2 !== 0){       //check if dateLenght is even
        dateLength = dateLength-1;
    }
    for(let i = 0; i<dateLength/2; i++){
        let firstNumbers = Number(String(dateStamp).slice(i*2,i*2+2)) % 26;
        chr = chr + String.fromCharCode(65 + firstNumbers);
    }
        return chr;
}

onMounted(()=>{
    getCurrentDate();
});


function getEmits(userInput: string, stringID: number){
    console.log(userInput);
    if(userInput.length == 0){
        checkArr.value[stringID] = false;
        checkAllInput();
    }else{
        checkArr.value[stringID] = true;
        checkAllInput();
    }
}

function checkAllInput(){
    tocontinue.value = checkArr.value[0] && checkArr.value[1] && checkArr.value[2] && checkArr.value[3]? true: false;
    console.log(tocontinue.value);
}

function getCurrentDate(){
    let dateTime = new Date();
    dateStr.value = dateTime.toLocaleDateString('de-DE');
    timeStr.value = dateTime.toLocaleTimeString();

}

</script>