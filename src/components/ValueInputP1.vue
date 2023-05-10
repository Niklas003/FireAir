<template>
    <div>
        <div class="flex flex-col">
            <span class="p-float-label my-4">
            <Input class="invalid:bg-red-500/20 outline outline-offset-0 outline-1 outline-red-500 valid:bg-green-500/20 valid:outline-green-500 p-2 rounded-md default:bg-white/70 text-xl text-white" v-on:change="emitInput()" v-on:input="emitInput()" id="input" 
            :value="userInput" @input="(e:any) => userInput = (e?.target as any)?.value" required />
            <label for="username text-white">{{props.placeholder}}</label>
        </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';

const userInput = ref("");

const emits =  defineEmits(['user-input']);
const props = defineProps({
    placeholder: String,
});

function emitInput() {
    if(userInput.value.length > 0)
        emits("user-input", userInput.value);    
}

</script>