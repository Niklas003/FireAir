<template>
    <div class="z-10 min-h-screen w-full absolute top-0 bg-transparent backdrop-blur-sm text-white">
        <div class="w-3/4 bg-[#22272A] min-h-screen shadow-xl shadow-gray-700 p-4 text-2xl">
           <h1 class="font-bold mb-2"><span @click="collapseMenu()" class="material-symbols-rounded relative top-1.5 cursor-pointer text-3xl">arrow_back</span> Menu</h1>
           <hr>
           <p class="my-2"><router-link @click="collapseMenu()" to="/"><span class="material-symbols-rounded relative top-1 cursor-pointer text-2xl mr-4">home</span>Home</router-link></p>
           <hr>
           <p class="my-2"><router-link @click="collapseMenu()" to="/settings"><span class="material-symbols-rounded relative top-1 cursor-pointer text-2xl mr-4">settings</span>Einstellungen</router-link></p>
           <hr>
           <p class="my-2"><router-link @click="collapseMenu()" to="/settings"><span class="material-symbols-rounded relative top-1 cursor-pointer text-2xl mr-4">policy</span>Impressum</router-link></p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue';

const emits =  defineEmits(['untoggleMenu']);

function collapseMenu(){
    emits("untoggleMenu", false);
}
</script>