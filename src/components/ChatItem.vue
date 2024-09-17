<template>
  <div :class="['chat-item', { active: isActive }]" @click="handleClick">
    <Avatar 
      :src="chat.avatar"
      :initials="chat.name.charAt(0)"
      customClass="chat-item__avatar"
    />
    <div class="chat-item__info">
      <div class="chat-item__info-header">
        <div class="chat-item__info-header-name">
          {{ chat.name }}
          <span v-if="chat.verified" class="chat-item__info-header-verified">
            <img class="chat-item__info-header-verified-icon" src="../assets/icons/icon-verified.svg" alt="верификация">
          </span>
        </div>
        <LastMessageTime 
          :timestamp="chatLastMessage.timestamp"
          customClass="chat-item__info-header-time"
        />
      </div>
      <div class="chat-item__info-footer">
        <div class="chat-item__info-footer-message">{{ chatLastMessage.text }}</div>
        <div v-if="chat.unreadMessages > 0" class="chat-item__info-footer-unread-count">{{ chat.unreadMessages }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import dayjs from 'dayjs';
import LastMessageTime from './LastMessageTime.vue';
import Avatar from './Avatar.vue';

const props = defineProps({
  chat: Object,
  isActive: Boolean
});
const emit = defineEmits(['selectChat']);

const chatLastMessage = computed(() => {
  return props.chat.messages.length > 0 
    ? props.chat.messages[props.chat.messages.length - 1] 
    : { text: 'No messages', timestamp: null };
});

const handleClick = () => {
  emit('selectChat', props.chat.id);
};
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';

.chat-item {
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
  justify-content: space-between;

  &.active {
    background-color: $chat-item-active-bg;
  }

  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin: 12px 16px;
    flex-shrink: 0;
  }

  &__info {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 13px 16px;
    overflow: hidden;
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 24px;

      &-name {
        color: $chat-item-text;
        font-weight: 600;
        display: flex;
        align-items: center;
        flex-grow: 1;
        width: 100%;
      }

      &-verified {
        width: 100%;
        height: 100%;
        margin-left: 2px;

        &-icon {
          width: 24px;
          height: 24px;
        }
      }

      &-time {
        color: $chat-item-text-gray;
        font-size: 12px;
        font-weight: 400;
        height: 100%;
        text-align: right;
      }
    }

    &-footer {
      width: 100%;
      height: 18px;
      display: flex;
      justify-content: space-between;


      &-message {
        color: $chat-item-text;
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &-unread-count {
        background-color: #78E378;
        color: $chat-item-circle-text;
        border-radius: 50%;
        font-size: 12px;
        width: 18px;
        height: 18px;
        text-align: center;
      }
    }
  }
}
</style>
