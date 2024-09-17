<template>
  <div class="header-chat-list">
    <div class="header-chat-list__menu" @click="toggleMenu">
      <img 
        class="header-chat-list__menu-icon" 
        src="../assets/icons/icon-menu.svg" 
        alt="Меню"
      />
    </div>
    <div class="header-chat-list__search">
      <button 
        @click="handleSearch" 
        class="header-chat-list__search-button"
      >
        <img 
          class="header-chat-list__search-icon" 
          src="../assets/icons/icon-search.svg" 
          alt="Поиск"
        />
      </button>
      <input 
        type="text" 
        v-model="query" 
        placeholder="Поиск" 
        class="header-chat-list__search-input"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['update:query', 'toggle-menu']);
const query = ref('');

// Обработчик клика для кнопки поиска
const handleSearch = () => {
  emit('update:query', query.value);
};

// Обработчик клика для меню
const toggleMenu = () => {
  emit('toggle-menu');
};
</script>


<style scoped lang="scss">
@import '../assets/style/variables.scss';

.header-chat-list {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $chat-list-bg;
  position: sticky;
  top: 0;

  &__menu {
    padding: 8px 16px;
    cursor: pointer;
  }

  &__menu-icon {
    width: 40px;
    height: 40px;
  }

  &__search {
    flex-grow: 1;
    margin-right: 16px;
    display: flex;
    align-items: center;
    background-color: $chat-list-search;
    height: 40px;
    border-radius: 22px;
  }

  &__search-button {
    padding: 8px 2px 8px 16px;
    border: none;
    cursor: pointer;
    height: 100%;
  }

  &__search-icon {
    width: 24px;
    height: 24px;
  }

  &__search-input {
    flex: 1;
    height: 100%;
    width: 100%;
    padding: 0;
    outline: none;
    color: $chat-list-text;
    
    &::placeholder {
      color: $chat-list-text;
    }
  }
}
</style>
