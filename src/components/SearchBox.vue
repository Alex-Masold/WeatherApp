<template>
    <div class="search-box">
        <custom-input v-model="NameCity" placeholder="Enter City Name" />
        <custom-button>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </custom-button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomInput from './UI/CustomInput.vue';
import CustomButton from './UI/CustomButton.vue';

const NameCity = ref('');
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
