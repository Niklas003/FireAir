<template>
    <div class="p-12">
        <router-link to="/" class="hover:underline text-white text-lg"><span class="material-symbols-rounded relative top-0.5 text-sm">arrow_back_ios</span> zurück</router-link>

        <h1 class="text-white text-4xl my-12">Einstellungen</h1>

        <ValueInputP1 placeholder="Name der Feuerwehr" @user-input="(userInput: string) => getEmits(userInput)"></ValueInputP1>
        <br>
        <button @click="setValue()" v-if="depName" class="bg-green-500 hover:bg-green-500/90 text-white p-2 rounded-md text-lg">Übernehmen</button>
        <button v-else class="bg-green-500/20 text-white/20 p-2 rounded-md text-lg">Übernehmen</button>
    </div>
</template>

<script setup lang="ts">
import ValueInputP1 from '@/components/ValueInputP1.vue';
import { ref } from 'vue';


var depName = ref<boolean>(false);
var inputValue = ref("");

function setValue(){
    localStorage.setItem('depName', inputValue.value);
}

function getEmits(userInput:string): boolean{
   inputValue.value = userInput;
   depName.value = userInput.length > 0? true: false;
   return depName.value
}

</script>