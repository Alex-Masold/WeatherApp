<template>
  <div class="card">
    <div class="search">
      <search />
      <button><img src="@\components\icons\search.png" /></button>
    </div>
    <div class="weather">
      <img src="@\components\icons\clouds.png" />
      <h1 class="temp">37°C</h1>
      <h2 class="city">city</h2>
      <div class="details">
        <div class="col">
          <img src="@\components\icons\humidity.png" />
          <div>
            <div class="humidity">50%</div>
            <div>Humidity</div>
          </div>
        </div>
        <div class="col">
          <img src="@\components\icons\wind.png" />
          <div>
            <div class="wind">15 km/h</div>
            <div>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from '@/components/Search.vue'
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;

  text-align: center;

  margin: 100px auto;
  padding: 20px 35px;

  width: 90%;
  max-width: 470px;

  background-color: #6dace3;

  border-radius: 30px;
}

.search {
  display: flex;

  gap: 10px;

  width: 100%;

  align-items: center;
  justify-content: space-between;
}

.search button {
  width: 60px;
  height: 60px;

  background: #ebfffc;

  border: 0;
  border-radius: 30px;
  outline: 0;

  cursor: pointer;
}
.search button img {
  width: 32px;
}

.details {
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  margin-top: 50px;
}
.col {
  display: flex;
  align-items: center;
  text-align: left;
}
.col img {
  width: 40px;
  margin-right: 10px;
}

.humidity,
.wind {
  font-size: 32px;
  margin: -5px;
}

.weather h1 {
  font-size: 80px;
  font-weight: 500;
}
.weather h2 {
  font-size: 45px;
  font-weight: 400;

  margin-top: -10px;
}
.weather-icon {
  width: 170px;
  margin-top: 30px;
}
</style>
