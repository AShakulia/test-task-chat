<template>
  <div :class="['chat-list', { 'chat-list--collapsed': isCollapsed }]">
    <ChatItemHeader v-model:query="searchQuery" @toggle-menu="toggleMenu" />
    <ChatItem 
      v-for="chat in filteredChats" 
      :key="chat.id"
      :chat="chat"
      :isActive="selectedChatId === chat.id"
      @selectChat="selectChat"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useChatStore } from '@/store';
import ChatItemHeader from './ChatItemHeader.vue';
import ChatItem from './ChatItem.vue';

const chatStore = useChatStore();
const router = useRouter();

const searchQuery = ref('');
const chats = computed(() => chatStore.chats);
const selectedChatId = computed(() => chatStore.selectedChatId);

const filteredChats = computed(() => {
  if (!searchQuery.value) return chats.value;
  return chats.value.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectChat = (chatId) => {
  chatStore.selectChat(chatId);
  router.push(`/chat/${chatId}`);
};

// Для управления шириной
const isCollapsed = ref(false);
const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped lang="scss">
.chat-list {
  width: 364px;
  height: 100vh;
  overflow: auto;

  &.chat-list--collapsed {
    width: 72px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
