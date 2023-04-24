<template>
    <div class="mx-8">
        <h1 class="text-4xl text-white my-12">Einsatz laden</h1>

        <table class="table-auto w-full text-white border-collapse border overflow-scroll">
            <thead class="bg-slate-700">
                <tr>
                    <th class="border border-slate-600 py-2 text-xl">ID</th>
                    <th class="border border-slate-600 text-xl">Datum</th>
                    <th class="border border-slate-600 text-xl">Uhrzeit</th>
                    <th class="border border-slate-600 text-xl">Einsatzart</th>
                    <th class="border border-slate-600 text-xl">Einsatzort</th>
                </tr>
            </thead>
            <tbody class="hover:bg-[#3c454b] cursor-pointer">
                <tr v-for="(i, index) in missionID" :key="index">
                    <th class="border border-slate-600 font-normal py-4 text-lg">{{ i }}</th>
                    <th class="border border-slate-600 font-normal text-lg">Datum</th>
                    <th class="border border-slate-600 font-normal text-lg">Uhrzeit</th>
                    <th class="border border-slate-600 font-normal text-lg">Einsatzart</th>
                    <th class="border border-slate-600 font-normal text-lg">Einsatzort</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import { MissionData } from '@/Interfaces/MissionData';
import { MissionID } from '@/Interfaces/MissionData';
import { ref, onMounted } from 'vue';

const missionID = ref<MissionID>();
const missionDataObj = ref<MissionData>();

onMounted(()=>{
    getMissionIDs();
    getMissionData();
});

function getMissionIDs(){
    missionID.value = JSON.parse(localStorage.getItem("missionID") || "[]");
    console.log(missionID.value);
}

function getMissionData(){
    for(var i in missionID.value){
       missionDataObj.value = JSON.parse(localStorage.getItem(i) || "{}");
    }
}

</script>