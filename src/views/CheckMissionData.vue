<template>
    <div class="p-4">
        <router-link to="/newmission" class="hover:underline text-white text-lg"><span class="material-symbols-rounded relative top-0.5 text-sm">arrow_back_ios</span> zurück</router-link>
        <div class="bg-sky-950 p-4 rounded-md mt-8 text-white">
            <h1 class="font-bold text-2xl">Einsatzdaten #{{ props.missionID }}</h1>
            <p>Datum: </p>
            <p>Zeit: </p>
            <p>AGT-Überwachung: </p>
            <p>Einsatzleitung: </p>
            <p>Einsatzstichwort: </p>
            <p>Einsatzort: </p>
        </div>
        <button class="border-green-500 rounded-md text-green-500 p-2 bg-green-500/10 mt-4">Abschließen</button>   
    </div>
</template>

<script setup lang="ts">
import { MissionData } from '@/MissionData';
import { ref, defineProps, onMounted } from 'vue';

var missionID = ref('');
var missionData: MissionData;

const props = defineProps({
    missionID: String,
});

onMounted(() => {
    getMissionData();
});

function getMissionData(){
    if(props.missionID === undefined){
        missionID.value = '[{}]';
    }else{
        missionID.value = props.missionID;
    }        
    }
}

</script>