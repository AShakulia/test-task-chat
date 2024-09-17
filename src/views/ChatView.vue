<template>
  <div class="chat-view">
    <ChatWindow />
  </div>
</template>

<script setup>
import ChatWindow from '@/components/ChatWindow.vue';
</script>

<style scoped>
.chat-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>


