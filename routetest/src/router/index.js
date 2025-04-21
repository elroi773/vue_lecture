// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({ //라우트 구성 객체 
  history: createWebHistory(),//히스토리 관리 방식 정의 
  routes: [ //라우트 객체 
    { //HomeView 컴포넌트 경로 연결 
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {//AboutView 컴포넌트 '/about' 경로 연결 
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    }
  ],
});

export default router;
