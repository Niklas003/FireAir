<template>
    <div>
        <div class="flex flex-col">
            <span class="p-float-label">
            <InputText v-on:change="emitInput()" v-on:input="emitInput()" id="input" :placeholder="props.placeholder" 
            :value="userInput" @input="e => userInput = (e?.target as any)?.value" required />
            <label for="username">{{props.placeholder}}</label>
        </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';
import InputText from 'primevue/inputtext';

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