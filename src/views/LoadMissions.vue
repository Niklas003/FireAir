<template>
    <div class="mx-8">
        <h1 class="text-4xl text-white my-12">Einsatz laden</h1>
            <div class="overflow-x-scroll">
                <table class="table-auto w-full text-white border-collapse border">
                    <thead class="bg-slate-700">
                        <tr>
                            <th class="border border-slate-600 py-2 text-xl">ID</th>
                            <th class="border border-slate-600 text-xl">Datum</th>
                            <th class="border border-slate-600 text-xl">Uhrzeit</th>
                            <th class="border border-slate-600 text-xl">Einsatzart</th>
                            <th class="border border-slate-600 text-xl">Einsatzort</th>
                            <th class="border border-slate-600 text-xl bg-red-600">Entfernen</th>
                        </tr>
                    </thead>
                    <tbody class="cursor-pointer">
                        <tr class="hover:bg-[#3c454b]" v-for="(i, index) in missionID" :key="index">
                            <th class="border border-slate-600 font-normal py-4 text-lg">{{ i }}</th>
                            <th class="border border-slate-600 font-normal text-lg">{{missionDataObject[index].date}}</th>
                            <th class="border border-slate-600 font-normal text-lg">{{missionDataObject[index].time}}</th>
                            <th class="border border-slate-600 font-normal text-lg">{{missionDataObject[index].missionType}}</th>
                            <th class="border border-slate-600 font-normal text-lg">{{missionDataObject[index].missionPlace}}</th>
                            <th class="border border-slate-600 font-normal text-lg bg-red-800/20"><span class="text-red-600 material-symbols-rounded relative top-0.5">delete</span></th>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>
<script setup lang="ts">
import { MissionData } from '@/Interfaces/MissionData';
import { MissionID } from '@/Interfaces/MissionData';
import { ref, onMounted } from 'vue';

const missionID = ref<MissionID>();
const missionDataObject = ref<MissionData>([]);

onMounted(()=>{
    getMissionIDs();
});

function getMissionIDs(){
    missionID.value = JSON.parse(localStorage.getItem("missionID") || "[]");
    getMissionData();
}

function getMissionData(){
    for(var i of missionID.value){
       let missData:MissionData = JSON.parse(localStorage.getItem(i) || "{}");        
        missionDataObject.value.push(missData);       
    }
}

</script>