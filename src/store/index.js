import { defineStore } from 'pinia';
import dayjs from 'dayjs'; // Импортируем библиотеку dayjs

export const useChatStore = defineStore('chat', {
  state: () => ({
    chats: [
      { id: 1, name: 'Иван', messages: [{ text: 'Hello from Chat 1', timestamp: dayjs().subtract(1, 'hour').toString() }], avatar: '', lastMessageRead: false, unreadMessages: 0, verified: true, lastActive: 'был в сети 5 минут назад' },
      { id: 2, name: 'Петр', messages: [{ text: 'Hello from Chat 2', timestamp: dayjs().subtract(30, 'minute').toString() }], avatar: '', lastMessageRead: true, unreadMessages: 0, verified: false, lastActive: 'был в сети 5 минут назад' },
      { id: 3, name: 'Василий', messages: [{ text: 'Hello from Chat 3', timestamp: dayjs().subtract(1, 'day').toString() }], avatar: '', lastMessageRead: true, unreadMessages: 0, verified: true, lastActive: 'был в сети 5 минут назад' },
      { id: 4, name: 'Екатерина', messages: [{ text: 'Hello from Chat 4', timestamp: dayjs().subtract(2, 'hour').toString() }], avatar: '', lastMessageRead: false, unreadMessages: 3, verified: false, lastActive: 'был в сети 5 минут назад' },
      { id: 5, name: 'Михаил', messages: [{ text: 'Hello from Chat 5', timestamp: dayjs().subtract(3, 'day').toString() }], avatar: '', lastMessageRead: true, unreadMessages: 0, verified: true, lastActive: 'был в сети 5 минут назад' },
      { id: 6, name: 'Арсений', messages: [{ text: 'Hello from Chat 6', timestamp: dayjs().subtract(45, 'minute').toString() }], avatar: '', lastMessageRead: false, unreadMessages: 2, verified: false, lastActive: 'был в сети 5 минут назад' },
      { id: 7, name: 'Николай', messages: [{ text: 'Hello from Chat 7', timestamp: dayjs().subtract(10, 'minute').toString() }], avatar: '', lastMessageRead: true, unreadMessages: 0, verified: true, lastActive: 'был в сети 5 минут назад' },
      { id: 8, name: 'Арсен', messages: [{ text: 'Hello from Chat 8', timestamp: dayjs().subtract(5, 'minute').toString() }], avatar: '', lastMessageRead: false, unreadMessages: 4, verified: false, lastActive: 'был в сети 5 минут назад' },
      { id: 9, name: 'Валентина', messages: [{ text: 'Hello from Chat 9', timestamp: dayjs().subtract(7, 'day').toString() }], avatar: '', lastMessageRead: true, unreadMessages: 0, verified: true, lastActive: 'был в сети 5 минут назад' },
      { id: 10, name: 'Ева', messages: [{ text: 'Hello from Chat 10', timestamp: dayjs().subtract(15, 'minute').toString() }], avatar: '', lastMessageRead: true, unreadMessages: 0, verified: false, lastActive: 'был в сети 5 минут назад' },
    ],
    selectedChatId: null
  }),
  actions: {
    selectChat(chatId) {
      const chat = this.chats.find(chat => chat.id === chatId);
      if (chat) {
        chat.lastMessageRead = true;
        chat.unreadMessages = 0;
        this.selectedChatId = chatId;
      }
    },
    getSelectedChat() {
      return this.chats.find(chat => chat.id === this.selectedChatId);
    },
    initializeFirstChat() {
      if (this.chats.length > 0 && this.selectedChatId === null) {
        this.selectedChatId = this.chats[0].id;
      }
    },
    addMessage(chatId, message) {
      const chat = this.chats.find(chat => chat.id === chatId);
      if (chat) {
        chat.messages.push(message);
        // Только если сообщение отправлено не в текущий чат, увеличиваем счетчик
        if (this.selectedChatId !== chatId) {
          chat.lastMessageRead = false;
          chat.unreadMessages++;
        }
      }
    },
    getUnreadMessagesCount(chatId) {
      const chat = this.chats.find(chat => chat.id === chatId);
      return chat ? chat.unreadMessages : 0;
    },
    isChatVerified(chatId) {
      const chat = this.chats.find(chat => chat.id === chatId);
      return chat ? chat.verified : false;
    }
  }
});


