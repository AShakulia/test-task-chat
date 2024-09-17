<template>
  <div :class="avatarClass">
    <img v-if="src" :src="src" :alt="alt" />
    <div v-else class="avatar__default">{{ initials }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: String,
  alt: {
    type: String,
    default: 'Avatar'
  },
  initials: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  }
});

const avatarClass = computed(() => {
  return ['avatar', props.customClass];
});
</script>

<style scoped lang="scss">
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  &__default {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    font-weight: bold;
  }

  &.default {
    background-color: #ccc;
    color: #666;
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
