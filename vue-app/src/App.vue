<template>
  <div class="container">
    <input name="firstInput" type="number" v-model="firstInput" />
    <input name="secondInput" type="number" v-model="secondInput" />
    <input name="thirdInput" type="number" v-model="thirdInput" />
    <div>Sum: {{ sum }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const firstInput = ref(0);
const secondInput = ref(0);
const thirdInput = ref(0);

const sum = computed(
  () => firstInput.value + secondInput.value + thirdInput.value
);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
