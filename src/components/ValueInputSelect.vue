<template>
    <div>
        <div class="flex flex-col">
            <Transition name="fade" mode="out-in">
                <label v-if="userInput !==''" for="input" class="transition ease-in duration-300 text-white relative -bottom-6 left-2 bg-[#22272A] w-fit p-0.5 border border-green-500 rounded-t-md">{{ props.placeholder }}</label>
            </Transition>
            <select name="select input" @change="emitInput()" v-model="userInput" id="input" class="invalid:bg-red-500/20 outline outline-offset-0 outline-1 outline-red-500 valid:bg-green-500/20 valid:outline-green-500 my-4 mt-6 p-2 rounded-md default:bg-white/70 text-xl text-white" required placeholder="Bundesland">
                <option value="" class="text-white/70">Bundesland wählen</option>
                <option class="bg-gray-600" v-for="(state, index) in props.options" :key="index" :value="state">{{ state }}</option>
            </select>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';

var userInput = ref<string>("");

const emits =  defineEmits(['user-input']);
const props = defineProps({
    placeholder: String,
    options: Array,
});

console.log(props.options)

function emitInput() {
        emits("user-input", userInput.value);
        console.log(userInput.value)    
}

</script>