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
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps({
    missionID: String,
});

onMounted(() => {
    getMissionData();
});

function getMissionData(){
    var missionIdS = localStorage.getItem("missionID");
    var parsedIdS = missionIdS!==null? JSON.parse(missionIdS) : JSON.parse("{}");
    console.log(parsedIdS)
    for(var i in parsedIdS.data){//this does not work
        console.log(i);
    }
}

</script>