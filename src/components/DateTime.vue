<template>
    <div class="p-8 text-white tracking-wider">
        <h2 class="text-2xl font-medium">{{ getName() }}</h2>
        <p class="text-lg">{{dateStr}}</p>
        <p class="text-lg">{{timeStr}}</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

var dateStr = ref('');
var timeStr = ref('');

onMounted(() => {
    
setInterval(() => {
    getCurrentDate();
}, 1000);
});

function getCurrentDate(){
    let dateTime = new Date();
    dateStr.value = dateTime.toLocaleDateString();
    timeStr.value = dateTime.toLocaleTimeString();

}

function getName(): any{
   return localStorage.getItem('depName');
}

</script>