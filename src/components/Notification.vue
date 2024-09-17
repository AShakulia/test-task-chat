<template>
  <teleport to="body">
    <div v-if="visible" class="notification">
      {{ message }}
    </div>
  </teleport>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 3000
  }
});

const visible = ref(true);

watch(() => props.message, (newMessage) => {
  if (newMessage) {
    visible.value = true;
    setTimeout(() => {
      visible.value = false;
    }, props.duration);
  }
});
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';

.notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $notification-bg;
  color: $notification-color;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
}
</style>
