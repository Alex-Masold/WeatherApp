<template>
  <custom-input v-model="city.name" placeholder="Enter City Name" />
  
</template>

<script setup>
import CustomInput from './Custom/CustomInput.vue'

const city = {
  name: String
}
</script>

<style scoped></style>
