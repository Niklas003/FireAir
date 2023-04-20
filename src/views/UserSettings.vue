<template>
    <div class="p-8">
        <h1 class="text-white text-4xl my-4">Einstellungen</h1>
        <ValueInputSelect placeholder="Bundesland wählen" @select-input="(selectInput: string) => setState(selectInput)" :options="federalStates"></ValueInputSelect>
        <ValueInputP1 placeholder="Name der Feuerwehr" @user-input="(userInput: string) => getEmits(userInput)"></ValueInputP1>
        <br>
        <button @click="setValues()" v-if="depName" class="bg-green-500 hover:bg-green-500/90 text-white p-2 rounded-md text-lg">Übernehmen</button>
        <button v-else class="bg-green-500/20 text-white/20 p-2 rounded-md text-lg">Übernehmen</button>
    </div>
</template>

<script setup lang="ts">
import ValueInputP1 from '@/components/ValueInputP1.vue';
import ValueInputSelect from '@/components/ValueInputSelect.vue';
import { ref } from 'vue';


var depName = ref<boolean>(false);
var inputValue = ref("");


function setValues(){
    setStationName();
}

function setStationName(){
    localStorage.setItem('depName', inputValue.value);

}

function setState(fedState: string){
    localStorage.setItem('federalState', fedState);
}

function getEmits(userInput:string): boolean{
   inputValue.value = userInput;
   depName.value = userInput.length > 0? true: false;
   return depName.value
}

const federalStates =[
    "Baden Württemberg",
    "Bayern",
    "Berlin",
    "Brandenburg",
    "Bremen",
    "Hamburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein Westfalen",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen",
    "Sachsen-Anhalt",
    "Schleswig-Holstein",
    "Thüringen"
];

</script>