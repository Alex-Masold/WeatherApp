<template>
    <div class="container">
        <search-box @search-city="hendleCityGet">
            <VProgressCircular indeterminate v-if="isLoading"></VProgressCircular>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-else />
        </search-box>

        <weather-box :class="classOblect"
            :temperature="parseInt(temperature)"
            :description="description"
            :weather="weather"
        />

        <div class="weather-details">
            <weather-detail
                class="humidity"
                :column-value="humidity + '%'"
                :column-name="'Humidity'"
            >
                <font-awesome-icon class="icon" icon="fa-solid fa-water" />
            </weather-detail>
            <weather-detail
                class="wind"
                :column-value="windSpeed + ' Km/h'"
                :column-name="'Wind Speed'"
            >
                <font-awesome-icon class="icon" icon="fa-solid fa-wind" />
            </weather-detail>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import SearchBox from '@/components/SearchBox.vue';
import WeatherDetail from '@/components/WeatherDetail.vue';
import WeatherBox from '@/components/WeatherBox.vue';
import { VProgressCircular } from 'vuetify/lib/components/index.mjs';

const weather = ref('');

const temperature = ref(0);
const description = ref('');

const city = ref('');

const windSpeed = ref(0);
const humidity = ref(0);

const isLoading = ref(false);
const isActive = ref(true);

const classOblect = reactive({
    active: true,
    'non-active': !isActive.value
});

function hendleCityGet(name) {
    city.value = name;
    fetching();
}

const apiKey = 'b1f8a36c21b3f9794820b0366dce7d12';
async function fetching() {
    try {
        isLoading.value = true;
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city.value,
                units: 'metric',
                appid: apiKey
            }
        });
        // console.log(response.data);
        temperature.value = response.data.main.temp;
        weather.value = response.data.weather[0].main;
        description.value = response.data.weather[0].description;
        humidity.value = response.data.main.humidity;
        windSpeed.value = response.data.wind.speed;

        // console.log(weather);
    } catch (error) {
        weather.value = 'location-dot';
        temperature.value = '';
        description.value = 'City not found';
    } finally {
        isLoading.value = false;
    }
}
</script>

<style scoped>
img {
    pointer-events: none;
}

.container {
    position: relative;
    width: 100%;
    max-width: 500px;
    min-width: 400px;
    background: teal;
    margin-right: 1rem;
    margin-left: 1rem;
    padding: 1.5em 2em;
    overflow: hidden;
    border-radius: 30px;
    font-family: 'Roboto', sans-serif;
    transition: 0.5s ease-out;
}

.non-active {
    height: 13%;
}

.weather-details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.weather-details .humidity {
    padding-left: 20px;
    justify-content: flex-start;
}

.weather-details .wind {
    padding-right: 20px;
    justify-content: flex-end;
}

.weather-details .icon {
    font-size: 3em;
    margin-right: 10px;
    margin-top: 6px;
}

.weather-box .non-active,
.weather-details .non-active{
    scale: 0;
    opacity: 0;
}

.fadeIn {
    animation: 0.5s fadeIn forwards;
    animation-delay: 0.5s;
}

@keyframes fadeIn {
    to {
        scale: 1;
        opacity: 1;
    }
}
</style>
