<template>
  <div class="chat-window">
    <ChatHeader 
      :avatar="selectedChat?.avatar" 
      :name="selectedChat?.name"
      :lastActive="selectedChat?.lastActive"
    />
    <div class="chat-window__messages">
    <LastMessageTime 
      :timestamp="selectedChat?.messages.length > 0 ? selectedChat.messages[selectedChat.messages.length - 1].timestamp : null" 
      customClass="chat-window__message-time"
    />
      <div 
        v-for="(message, index) in selectedChat?.messages" 
        :key="index"
        :class="['chat-window__message', + index % 2 === 0 ? 'left' : 'right']"
      >
        <div class="chat-window__message-text">{{ message.text }}</div>
        <div class="chat-window__message-text-time">{{ formatTime(message.timestamp) }}</div>
      </div>
    </div>
    <div class="chat-window__btn">
      <div class="chat-window__btn-container">
        <button class="chat-window__btn-smile-button">
          <img class="chat-window__btn-smile-icon" src="../assets/icons/icon-smile.svg" alt="Смайлики">
        </button>
        <input 
          v-model="newMessage" 
          @keyup.enter="sendMessage" 
          placeholder="Напишите сообщение" 
          class="chat-window__btn-input"
        />
        <button @click="sendMessage" class="chat-window__btn-send-button">
          <img class="chat-window__btn-send-icon" src="../assets/icons/icon-send.svg" alt="Поиск">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useChatStore } from '@/store';
import ChatHeader from './ChatHeader.vue';
import LastMessageTime from './LastMessageTime.vue';
import dayjs from 'dayjs';

const chatStore = useChatStore();

const newMessage = ref('');
const selectedChat = computed(() => chatStore.getSelectedChat());

const sendMessage = () => {
  if (newMessage.value.trim() === '') return;

  chatStore.addMessage(selectedChat.value.id, { 
    text: newMessage.value, 
    timestamp: new Date().toISOString() 
  });

  newMessage.value = '';
  chatStore.selectChat(selectedChat.value.id);
};

const formatTime = (timestamp) => {
  return dayjs(timestamp).format('HH:mm');
};
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';

.chat-window {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  &__messages {
    flex: 1;
    overflow-y: auto;
    padding: 0 32px;
    background-color: $chat-window-bg;

    &::-webkit-scrollbar {
      display: none;
    }

    .chat-window__message {
      padding: 0 12px;
      border-radius: 5px;
      width: max-content;
      margin: 5px 0;
      word-wrap: break-word;
      box-sizing: border-box;
      color: $chat-window-message-text;
      max-width: 30%;
      &.left {
        background-color: $chat-window-message-left-bg;
        margin-right: auto;
      }

      &.right {
        background-color: $chat-window-message-right-bg;
        margin-left: auto;
      }
    }
  }

  &__message-time {
    width: 90px;
    height: 28px;
    margin: 16px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 12px;
    background-color: $chat-window-time-bg;
    color: $chat-window-text-bg;
  }

  &__btn {
    width: 100%;
    background-color: $chat-window-bg;

    &-container {
      display: flex;
      align-items: center;
      background-color: $chat-window-message-btn-bg;
      height: 56px;
      margin: 16px 32px 24px;
      border-radius: 12px;
      }
    
      &-smile-button {
        padding: 16px 2px 16px 16px;
        border: none;
        cursor: pointer;
        height: 100%;

        &-icon {
          width: 24px;
          height: 24px;
          color: $chat-window-message-btn-color;
        }
      }

      &-input {
        flex: 1;
        height: 100%;
        width: 100%;
        padding: 0;
        outline: none;
        color: $chat-window-message-btn-color;

        &::placeholder {
          color: $chat-window-message-btn-color;
        }
      }

      &-send-button {
        padding: 16px;
        border: none;
        cursor: pointer;
        height: 100%;

        &-icon {
          width: 24px;
          height: 24px;
          color: $chat-window-message-btn-color;
        }  
    }
  }
}

.chat-window__message-text-time {
  color: $chat-window-message-text;
  font-size: 12px;
  text-align: right;
  width: 100%;
}

.chat-window__message-time {
  width: 90px;
  height: 28px;
  margin: 16px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 12px;
  background-color: $chat-window-time-bg;
  color: $chat-window-text-bg;
}
</style>




