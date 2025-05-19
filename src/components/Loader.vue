<template>
    <div class="loader">
      <span class="spinner"></span>
      <p>Загрузка данных...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  // no logic needed
  </script>
  
  <style scoped lang="scss">
  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    color: #666;
    font-size: 16px;
  }
  
  .spinner {
    width: 24px;
    height: 24px;
    border: 4px solid #ccc;
    border-top-color: #4a90e2;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  