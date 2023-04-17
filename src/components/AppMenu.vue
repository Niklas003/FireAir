<template>
    <div class="z-10 min-h-screen w-full absolute top-0 bg-transparent backdrop-blur-sm text-white">
        <div class="w-3/4 bg-[#22272A] min-h-screen shadow-xl shadow-gray-700">
            <span @click="collapseMenu()" class="material-symbols-rounded relative top-0.5 cursor-pointer">arrow_back</span>
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