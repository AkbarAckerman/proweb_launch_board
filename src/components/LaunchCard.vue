<template>
    <div class="card">
      <div class="header">
        <span class="format">{{ task.format }}</span>
        <span class="type">{{ task.practical ? 'Практика' : 'Теория' }}</span>
      </div>
      <div class="datetime">
        {{ formatDate(task.date) }} в {{ task.time.slice(0, 5) }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    task: {
      id: number
      format: string
      practical: boolean
      date: string
      time: string
    }
  }>()
  
  function formatDate(date: string): string {
    const d = new Date(date)
    return d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long' })
  }
  </script>
  
  <style scoped lang="scss">
  .card {
    background: white;
    border-radius: 10px;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
  }
  
  .format {
    color: #4a90e2;
  }
  
  .type {
    color: #50b83c;
  }
  
  .datetime {
    margin-top: 8px;
    font-size: 13px;
    color: #555;
  }
  </style>
  