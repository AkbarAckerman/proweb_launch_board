<template>
    <aside class="sidebar">
      <div class="logo">🚀 Proweb</div>
      <nav class="menu">
        <RouterLink
          to="/"
          class="menu-item"
          :class="{ active: route.name === 'Home' }"
        >
          <span><img src="../assets/flagicon.png" alt="icon" class="icon" /></span>
          <span>Запуски</span>
        </RouterLink>
        <RouterLink
          to="/about"
          class="menu-item"
          :class="{ active: route.name === 'About' }"
        >
        <span><img src="../assets/manicon.png" alt="icon" class="icon" /></span>
          <span>Обо мне</span>
        </RouterLink>
      </nav>
    </aside>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  const route = useRoute()
  </script>
  
  <style scoped>
  .sidebar {
    width: 260px;
    background-color: #f9f9f1;
    height: 100vh;
    padding: 32px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-right: 1px solid #e2e2e2;
  }
  
  .logo {
    font-size: 22px;
    font-weight: bold;
    color: #333;
  }
  
  .menu {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 12px;
    color: #555;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s ease;
  }
  
  .menu-item:hover {
    background-color: #ffffff;
    color: #000;
  }
  
  .menu-item.active {
    background-color: #ffffff;
    color: #000;
    font-weight: bold;
  }
  
  .icon {
    font-size: 16px;
  }
  </style>
  