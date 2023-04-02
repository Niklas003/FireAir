<template>
    <div>
        <div class="flex flex-col">
            <input :placeholder="props.placeholder" type="text" class="invalid:bg-red-500/20 outline outline-offset-0 outline-2 outline-red-500 valid:bg-green-500/20 valid:outline-green-500 my-4 mt-8 p-2 rounded-md default:bg-white/70 text-xl text-white"
            :value="userInput" @input="e => userInput = (e?.target as any)?.value" @focusout="emitInput()" required>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';

const userInput = ref('');

const emits =  defineEmits(['user-input']);
const props = defineProps({
    placeholder: String,
});

function emitInput() {
    if(userInput.value.length > 0)
        emits("user-input", userInput.value);    
}

</script>