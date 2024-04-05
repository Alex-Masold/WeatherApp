<template>
    <div class="search-box">
        <custom-input v-model="NameCity" placeholder="Enter City Name" />
        <custom-button @click="hendleGetCity">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </custom-button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomInput from './UI/CustomInput.vue';
import CustomButton from './UI/CustomButton.vue';

const emit = defineEmits(['search-city']);

const NameCity = ref('');

function hendleGetCity() {
    emit('search-city', NameCity.value);
}
</script>

<style scoped>
.search-box {
    display: flex;

    gap: 10px;

    width: 100%;

    align-items: center;
    justify-content: space-between;
}
</style>
