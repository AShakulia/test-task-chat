<!-- src/App.vue -->
<template>
  <div class="app">
    <ChatList />
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import ChatList from '@/components/ChatList.vue';
import { useChatStore } from '@/store';

const chatStore = useChatStore();

onMounted(() => {
  chatStore.initializeFirstChat();
});
</script>

<style>
.app {
  display: flex;
  height: 100vh;
}
</style>


