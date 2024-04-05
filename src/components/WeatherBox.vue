<template>
    <div class="weather-box">
        <img src="@\components\icons\clouds.png" />
        <p class="temperature">{{ props.temperature }}</p>
        <p class="description">{{ props.description }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    temperature: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

</script>

<style scoped>
.weather-box {
    text-align: center;
}

.weather-box .temperature {
    position: relative;
    font-size: 4rem;
    font-weight: 800;
    margin-left: -16px;
}

.weather-box .temperature span {
    position: absolute;
    margin-left: 4px;
    font-size: 1.5rem;
}

.weather-box .description {
    font-size: 2em;
    font-weight: 500;
    text-transform: capitalize;
}

.weather-box img {
    width: 60%;
    margin-top: 30px;
}
</style>
