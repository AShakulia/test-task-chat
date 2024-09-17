<template>
  <div :class="[customClass]">
    {{ formattedTime }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
import dayjs from 'dayjs';

const props = defineProps({
  timestamp: {
    type: String,
    default: null
  },
  format: {
    type: String,
    default: 'HH:mm'
  },
  customClass: {
    type: String,
    default: ''
  }
});

const formattedTime = computed(() => {
  return props.timestamp ? dayjs(props.timestamp).format(props.format) : '';
});
</script>

<style scoped>
</style>

