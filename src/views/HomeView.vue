<template>
  <div class="launches-page">
    <h1 class="title">Запуски</h1>

    <div class="categories-wrapper">
      <strong class="categories-label">Категории</strong>
      <div class="categories">
        <span
          v-for="category in launchStore.categories"
          :key="category.id"
          class="category"
          :style="{ backgroundColor: category.color, color: '#fff' }"
          @click="launchStore.toggleCategory(category.name)"
          :class="{ active: launchStore.activeCategory === category.name }"
        >
          {{ category.name }}
        </span>
      </div>
    </div>

    <div class="cards-grid">
      <div
        v-for="launch in launchStore.filteredLaunches"
        :key="launch.id"
        class="course-card"
      >
        <div class="course-header">
          <span class="course-title">{{ launch.name }}</span>
          <span
            class="course-tag"
            v-if="launch.categories[0]"
            :style="{ backgroundColor: getTagColor(launch.categories[0].name) }"
          >
            {{ launch.categories[0].name }}
          </span>
        </div>

        <div class="card-section">
          <strong>Старт групп</strong>
          <div v-if="launch.groups.length" class="text-xs text-muted">
            {{ formatStartDate(launch.groups[0]) }}
          </div>
          <div class="time-list">
            <div v-for="group in launch.groups" :key="group.id">
              {{ group.study_time }}
            </div>
          </div>
        </div>

        <div class="card-section secondary" v-if="launch.open_lessons.length">
          <strong>Открытые уроки</strong>
          <div
            v-for="lesson in launch.open_lessons"
            :key="lesson.id"
            class="open-lesson"
          >
            <div class="text-xs text-muted">{{ formatDate(lesson.date) }}</div>
            <div class="time-list">
              <div>{{ lesson.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useLaunchStore } from '@/stores/launchStore'

const launchStore = useLaunchStore()

onMounted(() => {
  launchStore.fetchLaunches()
})

function formatStartDate(group: any): string {
  const date = new Date(group.start_date)
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  const weekDays = group.days.map((d: number) => days[d] || '').join(', ')
  return `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()} · ${weekDays}`
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()} · ${days[date.getDay()]}`
}

function getMonthName(month: number): string {
  const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
  return months[month]
}

function getTagColor(name: string): string {
  const map: Record<string, string> = {
    'маркетинг': '#039992',
    'программирование': '#0220FF',
    '3D графика': '#00BAE2',
    'медиа': '#FF9900'
  }
  return map[name.toLowerCase()] || '#6abf4b'
}
</script>

<style scoped>
.launches-page {
  padding: 24px;
}
.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}

.categories-wrapper {
  background-color: #ededed;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.categories-label {
  font-size: 14px;
  margin-right: 8px;
}
.categories {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.category {
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.8;
}
.category.active {
  font-weight: bold;
  opacity: 1;
  transform: scale(1.05);
}

.cards-grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.course-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  width: 260px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.course-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.course-title {
  font-weight: 600;
}
.course-tag {
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 8px;
  color: white;
}
.card-section {
  background: #f6f6f6;
  border-radius: 12px;
  padding: 12px;
  font-size: 14px;
}
.card-section.secondary {
  background: #f0ead6;
}
.text-xs {
  font-size: 12px;
}
.text-muted {
  color: #777;
}
.time-list {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.open-lesson + .open-lesson {
  margin-top: 10px;
}
</style>
