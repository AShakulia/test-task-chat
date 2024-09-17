<template>
  <div class="header-chat">
    <Avatar 
      :src="avatar"
      :initials="name.charAt(0)"
      customClass="header-chat__avatar"
    />
    <div class="header-chat__info">
      <div class="header-chat__name">{{ name }}</div>
      <div class="header-chat__last-active">{{ lastActive }}</div>
    </div>
    <div class="header-chat__functions">
      <div class="header-chat__function-search">
        <img 
          class="header-chat__function-search-icon" 
          src="../assets/icons/icon-search.svg" 
          alt="Поиск"
        />
      </div>
      <div class="header-chat__function-call">
        <img 
          class="header-chat__function-call-icon" 
          src="../assets/icons/icon-call.svg" 
          alt="Звонок"
        />
      </div>
      <div class="header-chat__function-more">
        <img 
          class="header-chat__function-more-icon" 
          src="../assets/icons/icon-more.svg" 
          alt="Меню"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useChatStore } from '@/store';
import Avatar from './Avatar.vue'; // Импорт компонента

const props = defineProps({
  avatar: String,
  name: String,
  lastActive: String
});

const chatStore = useChatStore();
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';

.header-chat {
  height: 56px;
  background-color: $chat-header-bg;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin: 8px 16px;
  }

  &__info {
    flex: 0 0 75%;
    height: 40px;
    width: 100%;
    text-align: left;
  }

  &__name {
    font-weight: 600;
    color: $chat-header-text;
    height: 20px;
    margin-bottom: 4px;
  }

  &__last-active {
    font-size: 14px;
    height: 18px;
    color: $chat-header-text-gray;
  }

  &__functions {
    height: 40px;
    flex-grow: 1;
    display: flex;
    justify-content: left;
  }

  &__function-search,
  &__function-call,
  &__function-more {
    margin-right: 8px;
    padding: 8px;
    cursor: pointer;
  }

  &__function-search-icon,
  &__function-call-icon,
  &__function-more-icon {
    height: 24px;
    width: 24px;
  }
}
</style>
