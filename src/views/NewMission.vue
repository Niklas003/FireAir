<template>
    <div class="p-12">
        <router-link to="/" class="hover:underline text-white text-lg"><span class="material-symbols-rounded relative top-0.5 text-sm">arrow_back_ios</span> zurück</router-link>

        <h1 class="text-4xl text-white my-12">Neuer Einsatz</h1>
        <MissionInputP1 placeholder="AGT Überwachung" @user-input="(userInput: string) => getEmits(userInput, 0)"></MissionInputP1>
        <MissionInputP1 placeholder="Einsatzleitung" @user-input="(userInput: string) => getEmits(userInput, 1)"></MissionInputP1>
        <MissionInputP1 placeholder="Stichwort" @user-input="(userInput: string) => getEmits(userInput, 2)"></MissionInputP1>
        <MissionInputP1 placeholder="Einsatzort" @user-input="(userInput: string) => getEmits(userInput, 3)"></MissionInputP1>

        <h2 class="text-white text-xl"><b>Datum: </b> {{ dateStr }}</h2>
        <h2 class="text-white text-xl"><b>Uhrzeit: </b> {{ timeStr }}</h2>
        <p class="text-md text-white">Einsatz ID: #{{generateID()}}</p>
    </div>

    <div class="flex flex-col-reverse md:flex-row justify-between mx-12 pb-8">
            <button class="rounded-md p-2 border-2 border-sky-400 text-sky-400 text-lg mt-4 md:mt-0">Vorerst Überspringen</button>
            <router-link :to="{name: 'checkMissionData', params:{missionID: generatedMissionID}}" @click="setMissionValues()" v-if="tocontinue" class="rounded-md p-2 border-2 border-green-500 bg-green-500/10 text-green-500 text-lg text-center">            
                <button>Weiter <span class="material-symbols-rounded relative top-1.5">arrow_forward</span></button>
            </router-link>
            <button v-else class="rounded-md p-2 border-2 border-green-500/20 bg-green-500/10 text-green-500/10 text-lg">Weiter <span class="material-symbols-rounded relative top-1.5">arrow_forward</span></button>
    </div>
</template>

<script setup lang="ts">
import MissionInputP1 from '@/components/ValueInputP1.vue';
import { onMounted, ref } from 'vue';
import { MissionData, MissionID } from '../MissionData';

const dateStr = ref('');
const timeStr = ref('');
var tocontinue = ref<boolean>(false);
var checkArr = ref<boolean[]>([]);
var missionValues = ref<string[]>(['']);
const generatedMissionID = ref('');
var missionObject: MissionData;
var missionIdObject: MissionID;

function generateID(){
    let chr = "";
    let dateStamp = Date.now();
    let dateLength = String(dateStamp).length;
    if(dateLength % 2 !== 0){       //check if dateLenght is even
        dateLength = dateLength-1;
    }
    for(let i = 0; i<dateLength/2; i++){
        let firstNumbers = Number(String(dateStamp).slice(i*2,i*2+2)) % 26;
        chr = chr + String.fromCharCode(65 + firstNumbers);
    }
        generatedMissionID.value = chr;
        return chr;
}

onMounted(()=>{
    getCurrentDate();
});


function getEmits(userInput: string, stringID: number){
    if(userInput.length-1 == 0){
        checkArr.value[stringID] = false;
        checkAllInput();
    }else{
        checkArr.value[stringID] = true;
        missionValues.value[stringID] = userInput;
        checkAllInput();
    }
}

function checkAllInput(){
    tocontinue.value = checkArr.value[0] && checkArr.value[1] && checkArr.value[2] && checkArr.value[3]? true: false;
}

function getCurrentDate(){
    let dateTime = new Date();
    dateStr.value = dateTime.toLocaleDateString('de-DE');
    timeStr.value = dateTime.toLocaleTimeString();

}

function setMissionValues(){

    missionIdObject = {
        ID: generatedMissionID.value,
    };

    if(localStorage.getItem("missionID") === null){
        localStorage.setItem("missionID", JSON.stringify(missionIdObject));
    }else{
       const missionIdObjectString = localStorage.getItem("missionID")+JSON.stringify(missionIdObject)
        localStorage.setItem("missionID", missionIdObjectString)
    }

    missionObject = {
        missionID: generatedMissionID.value, 
        date: dateStr.value,
        time: timeStr.value,
        surveillance: missionValues.value[0],
        manager: missionValues.value[1],
        missionType: missionValues.value[2],
        missionPlace: missionValues.value[3],
    };
    localStorage.setItem(generatedMissionID.value, JSON.stringify(missionObject));
}
</script>