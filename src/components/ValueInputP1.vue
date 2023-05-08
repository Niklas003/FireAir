<template>
    <div>
        <div class="flex flex-col">
            <Transition name="fade" mode="out-in">
                <label v-if="userInput.length > 0" for="input" class="transition ease-in duration-300 text-white relative -bottom-6 left-2 bg-[#22272A] w-fit p-0.5 border border-green-500 rounded-t-md">{{ props.placeholder }}</label>
            </Transition>
            <InputText v-on:change="emitInput()" v-on:input="emitInput()" id="input" :placeholder="props.placeholder" 
            :value="userInput" @input="e => userInput = (e?.target as any)?.value" required />
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