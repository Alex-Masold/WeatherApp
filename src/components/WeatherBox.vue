<template>
    <div class="weather-box">
        <font-awesome-icon class="icon" :icon="icons.get(props.weather) || props.weather" />
        <p class="temperature">{{ props.temperature }}°C</p>
        <p class="description">{{ props.description }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    temperature: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    weather: {
        type: String,
        required: true
    }
});

const icons = ref(
    new Map([
        ['Thunderstorm', 'cloud-bolt'],
        ['Drizzle', 'cloud-rain'],
        ['Rain', 'cloud-sun-rain'],
        ['Snow', 'snowflake'],
        ['Clouds', 'cloud'],
        ['Clear', 'sun'],
        ['Mist', 'smog'],
        ['Smoke', 'smog'],
        ['Haze', 'smog'],
        ['Fog', 'smog'],
        ['Sand', 'smog'],
        ['Dust', 'smog'],
        ['Ash', 'smog'],
        ['Squall', 'smog'],
        ['Tornado', 'tornado'],
    ])
);
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

.weather-box .icon {
    color: azure;
    font-size: 10em;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
