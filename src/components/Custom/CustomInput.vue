<template>
  <input type="text" class="input" :value="modelValue" @input="updateInput" />
</template>

<script setup lang="ts">
const props = defineProps({
});
const emit = defineEmits(
    ['update:modelValue']
);

function updateInput(event: any) {
    emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.input {
  flex: 1;

  padding: 10px 25px;

  height: 60px;

  font-size: 18px;
  color: #555;

  background: #ebfffc;

  border: 0;
  border-radius: 30px;
  outline: 0;
}
</style>
