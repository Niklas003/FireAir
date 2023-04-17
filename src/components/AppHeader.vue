<template>
    <div class="bg-[#22272A] py-4 shadow-lg shadow-gray-700 flex justify-between items-baseline px-8 text-white">
        <span @click="toggleMenu()" class="material-symbols-rounded relative top-0.5 cursor-pointer text-2xl">menu</span>
        <h1 class="text-2xl font-bold"><span class="material-symbols-rounded relative top-0.5">local_fire_department</span>FireAir</h1>
    </div>
    <Transition name="slide-fade">
        <AppMenu v-if="menuToggle" @untoggleMenu="() => toggleMenu()"></AppMenu>
    </Transition>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AppMenu from './AppMenu.vue';

var menuToggle = ref(false);

function toggleMenu(){
    menuToggle.value = !menuToggle.value
    console.log(menuToggle.value)
}
</script>