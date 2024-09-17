// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ChatView from '@/views/ChatView.vue';
import { useChatStore } from '@/store';

const routes = [
  {
    path: '/',
    redirect: () => {
      const chatStore = useChatStore();
      if (chatStore.chats.length > 0) {
        return `/chat/${chatStore.chats[0].id}`; // Перенаправляем на первый чат
      } else {
        return '/'; // Или другой путь, если чаты отсутствуют
      }
    }
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: ChatView,
    props: route => ({
      selectedChatId: Number(route.params.id)
    })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;







