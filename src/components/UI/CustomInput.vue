<template>
  <input type="text" class="input" v-model="modelValue" />
</template>

<script setup>
const modelValue = defineModel({type: String, default: ''});
</script>

<style scoped>
.input {
  flex: 1;

  padding: 10px 25px;

  height: 60px;

  font-size: 24px;
  color: #555;

  background: #ebfffc;

  border: 0;
  border-radius: 30px;
  outline: 0;
}
</style>
