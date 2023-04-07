<template>
    <div>
        <div class="flex flex-col">
            <Transition name="fade" mode="out-in">
                <label v-if="userInput.length > 0" for="input" class="transition ease-in duration-300 text-white relative -bottom-6 left-2 bg-[#22272A] w-fit p-0.5 border border-green-500 rounded-t-md">{{ props.placeholder }}</label>
            </Transition>
            <input v-on:input="$emit('user-input', userInput)" id="input" :placeholder="props.placeholder" type="text" class="invalid:bg-red-500/20 outline outline-offset-0 outline-1 outline-red-500 valid:bg-green-500/20 valid:outline-green-500 my-4 mt-6 p-2 rounded-md default:bg-white/70 text-xl text-white"
            :value="userInput" @input="e => userInput = (e?.target as any)?.value" required>
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
    console.log(userInput.value)
    if(userInput.value.length > 0)
        emits("user-input", userInput.value);    
}

</script>