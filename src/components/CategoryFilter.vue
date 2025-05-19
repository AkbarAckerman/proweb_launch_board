<template>
    <div class="categories">
      <button
        v-for="category in categories"
        :key="category"
        :style="{ backgroundColor: getColor(category), color: isLight(getColor(category)) ? '#000' : '#fff' }"
        :class="{ active: selected === category }"
        @click="$emit('toggle', category)"
      >
        {{ category }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    categories: string[]
    selected: string | null
  }>()
  
  defineEmits(['toggle'])
  
  function getColor(category: string) {
    const map: Record<string, string> = {
      'Фронтенд': '#FFD700',
      'Бэкенд': '#6A5ACD',
      'UX/UI': '#FF69B4'
    }
    return map[category] || '#aaa'
  }
  
  function isLight(color: string): boolean {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
  }
  </script>
  
  <style scoped lang="scss">
  .categories {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 10px;
  
    button {
      padding: 6px 12px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      transition: 0.3s;
    }
  
    .active {
      outline: 2px solid #333;
    }
  }
  </style>
  