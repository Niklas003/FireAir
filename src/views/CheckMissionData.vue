<template>
    <div class="p-4">
        <router-link to="/newmission" class="hover:underline text-white text-lg"><span class="material-symbols-rounded relative top-0.5 text-sm">arrow_back_ios</span> zurück</router-link>
        <div class="bg-sky-950 p-4 rounded-md mt-8 text-white">
            <h1 class="font-bold text-2xl">Einsatzdaten <span class="font-light text-xl">#{{ props.missionID }}</span></h1>
            <p class="py-2">Datum: {{ missionData.date }}</p >
            <p class="py-2">Zeit: {{ missionData.time }}</p>
            <p class="py-2">AGT-Überwachung: {{ missionData.surveillance }}</p>
            <p class="py-2">Einsatzleitung: {{ missionData.manager }}</p>
            <p class="py-2">Einsatzstichwort: {{ missionData.missionType }}</p>
            <p class="py-2">Einsatzort: {{ missionData.missionPlace }}</p>
        </div>
        <button class="border-green-500 rounded-md text-green-500 p-2 bg-green-500/10 mt-4">Abschließen</button>   
    </div>
</template>

<script setup lang="ts">
import { MissionData } from '@/MissionData';
import { ref, defineProps, onMounted } from 'vue';

var missionData: MissionData;
var missionID = ref('');

const props = defineProps({
    missionID: String,
});

onMounted(() => {
    getMissionData();
});

function getMissionData(){
    if(props.missionID === undefined){
        missionID.value = '';
    }else{
        if(localStorage.getItem(props.missionID)===null){
            console.log("Did not found Data");
        }
        else{
            // missionString cannot get null because of the fetch by the if statement
            let missionString:string = localStorage.getItem(props.missionID);
            missionData = JSON.parse(missionString);
            console.log(missionData);
        }
    }        
}


</script>