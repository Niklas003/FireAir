<template>
    <div class="p-4">
        <router-link to="/newmission" class="hover:underline text-white text-lg"><span class="material-symbols-rounded relative top-0.5 text-sm">arrow_back_ios</span> zurück</router-link>
        <div class="bg-gray-700 p-4 rounded-md mt-8 text-white">
            <h1 class="font-bold text-2xl">Einsatzdaten <span class="font-light text-xl">#{{ props.missionID }}</span></h1>
            <hr>
            <p class="py-2">Datum: <b>{{ missionData?.date }}</b></p >
            <p class="py-2">Startzeit: <b>{{ missionData?.time }}</b></p>
            <p class="py-2">AGT-Überwachung: <b>{{ missionData?.surveillance }}</b></p>
            <p class="py-2">Einsatzleitung: <b>{{ missionData?.manager }}</b></p>
            <p class="py-2">Einsatzstichwort: <b>{{ missionData?.missionType }}</b></p>
            <p class="py-2">Einsatzort: <b>{{ missionData?.missionPlace }}</b></p>
        </div>
        <div class="flex flex-row mt-8">
            <router-link :to="{name: 'missionDashboard', params:{missionID: props.missionID}}" 
            class="w-full animate-pulse border-2 border-green-500 rounded-md text-green-500 p-2 bg-green-500/10 text-2xl text-center">Abschließen  
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MissionData } from '../Interfaces/MissionData';
import { ref, defineProps, onMounted } from 'vue';

var missionData = ref<MissionData>() ;
var missionID = ref<string>('');

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
            const missionJSON = JSON.parse(missionString);
            missionData.value = {
                date: missionJSON.date,
                time: missionJSON.time,
                surveillance: missionJSON.surveillance,
                manager: missionJSON.manager,
                missionType: missionJSON.missionType,
                missionPlace: missionJSON.missionPlace,
                missionID: missionJSON.missionID
            }
            console.log(missionData);
        }
    }        
}


</script>