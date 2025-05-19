import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface Category {
  id: number
  name: string
  key: string
  color: string
}

interface Group {
  id: number
  format: string
  start_date: string
  study_time: string
  days: number[]
}

interface OpenLesson {
  id: number
  format: string
  practical: boolean
  date: string
  time: string
}

interface Launch {
  id: number
  name: string
  slug: string
  ads_banner: string
  categories: Category[]
  groups: Group[]
  open_lessons: OpenLesson[]
}

export const useLaunchStore = defineStore('launch', () => {
  const launches = ref<Launch[]>([])
  const categories = ref<Category[]>([])
  const isLoading = ref(false)
  const activeCategory = ref<string | null>(null)

  const fetchLaunches = async () => {
    isLoading.value = true
    try {
      const res = await fetch('https://main.proweb.uz/api/v1/launches/external/course/research/')
      const data = await res.json()

      if (Array.isArray(data.results)) {
        launches.value = data.results
        extractCategories(data.results)
      }
    } finally {
      isLoading.value = false
    }
  }

  const extractCategories = (launchList: Launch[]) => {
    const allCategories = launchList.flatMap(item => item.categories || [])
    const uniqueMap = new Map<number, Category>()
    for (const cat of allCategories) {
      if (cat && !uniqueMap.has(cat.id)) {
        uniqueMap.set(cat.id, cat)
      }
    }
    categories.value = Array.from(uniqueMap.values())
  }

  const filteredLaunches = computed(() => {
    if (!activeCategory.value) return launches.value
    return launches.value.filter(launch =>
      launch.categories.some(cat => cat.name === activeCategory.value)
    )
  })

  const toggleCategory = (categoryName: string) => {
    if (activeCategory.value === categoryName) {
      activeCategory.value = null
    } else {
      activeCategory.value = categoryName
    }
  }

  return {
    launches,
    categories,
    isLoading,
    activeCategory,
    fetchLaunches,
    filteredLaunches,
    toggleCategory,
  }
})
