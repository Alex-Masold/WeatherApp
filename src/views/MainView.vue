<template>
    <div class="container">
        <search-box @search-city="hendleCityGet" />

        <weather-box :temperature="temperature + '°C'" :description="city" />

        <div class="weather-details">
            <weather-detail
                class="humidity"
                :column-value="humidityValue + '%'"
                :column-name="humidityName"
            >
                <font-awesome-icon class="icon" icon="fa-solid fa-water" />
            </weather-detail>
            <weather-detail
                class="wind"
                :column-value="windValue + ' Km/h'"
                :column-name="windName"
            >
                <font-awesome-icon class="icon" icon="fa-solid fa-wind" />
            </weather-detail>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import SearchBox from '@/components/SearchBox.vue';
import WeatherDetail from '@/components/WeatherDetail.vue';
import WeatherBox from '@/components/WeatherBox.vue';

const weather = ref({});

const temperature = ref(10);
const city = ref('');

const windValue = ref(10);
const windName = ref('Wind Speed');
const humidityValue = ref(50);
const humidityName = ref('Humidity');

function hendleCityGet(name) {
    city.value = name;
    fetching();
}


const apiKey = 'b1f8a36c21b3f9794820b0366dce7d12';
async function fetching() {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city.value,
                appid: apiKey
            }
        });

		weather.value = response.data;
        console.log(weather);
    } catch (error) {
        alert('City not found');
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
    /* height: 13%; */
    background: teal;
    margin-right: 1rem;
    margin-left: 1rem;
    padding: 1.5em 2em;
    overflow: hidden;
    border-radius: 30px;
    transition: 0.3s ease-out;
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
</style>
