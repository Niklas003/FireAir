<template>
    <div class="p-12">
        <h1 class="text-white text-4xl mb-12">Einstellungen</h1>

        <input required placeholder="Name Feuerwehr" type="text" class="invalid:bg-red-500/20 outline outline-offset-0 outline-2 outline-red-500 valid:bg-green-500/20 valid:outline-green-500 my-4 mt-8 p-2 rounded-md default:bg-white/70 text-xl text-white"
        :value="depName" @input="e => depName = (e?.target as any)?.value"
        >
        <br>
        <button @click="setValue()" v-if="depName.length > 2" class="bg-green-500 hover:bg-green-500/90 text-white p-2 rounded-md text-lg">Übernehmen</button>
        <button v-else class="bg-green-500/20 text-white/20 p-2 rounded-md text-lg">Übernehmen</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


var depName = ref("");

function setValue(){
    localStorage.setItem('depName', depName.value);
}

</script>