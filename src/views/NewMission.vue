<template>
    <div class="p-12">
        <h1 class="text-4xl text-white mb-12">Neuer Einsatz</h1>
        <MissionInputP1></MissionInputP1>
        <p class="text-md text-white">Einsatz ID: #{{generateID()}}</p>
    </div>
</template>

<script setup lang="ts">
import MissionInputP1 from '@/components/MissionInputP1.vue';

function generateID(){
    return Date.now()
}

</script>