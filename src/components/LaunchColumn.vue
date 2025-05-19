<template>
    <div class="column">
      <h2 class="title">{{ course.name }}</h2>
      <div class="cards">
        <LaunchCard
          v-for="(lesson, index) in course.open_lessons"
          :key="index"
          :task="lesson"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import LaunchCard from './LaunchCard.vue'
  
  defineProps<{
    course: {
      id: number
      name: string
      slug: string
      ads_banner: string
      categories: {
        id: number
        name: string
        key: string
        color: string
      }[]
      groups: {
        id: number
        format: string
        start_date: string
        study_time: string
        days: number[]
      }[]
      open_lessons: {
        id: number
        format: string
        practical: boolean
        date: string
        time: string
      }[]
    }
  }>()
  </script>
  
  <style scoped lang="scss">
  .column {
    background: #f8f8f8;
    border-radius: 12px;
    padding: 16px;
    min-width: 260px;
    max-width: 280px;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  
  .cards {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  </style>
  