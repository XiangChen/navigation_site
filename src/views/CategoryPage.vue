<template>
  <div class="min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
    <AppHeader />
    
    <main class="max-w-container-max mx-auto pt-24 px-4 md:px-gutter lg:px-margin-desktop pb-20">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 mb-8 text-on-surface-variant font-label-sm text-label-sm">
        <a href="/" class="hover:text-primary transition-colors">Home</a>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <span class="text-on-surface">{{ currentCategoryName }}</span>
      </nav>

      <!-- Category Header -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-4 text-primary-fixed-dim">
          <span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">{{ currentCategoryIcon }}</span>
        </div>
        <h1 class="font-headline-xl text-headline-xl text-primary mb-2">{{ currentCategoryName }}</h1>
        <p class="text-lg text-on-surface-variant">{{ tools.length }} tools found in this category.</p>
      </div>

      <!-- Tools Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          v-for="tool in tools" 
          :key="tool.id"
          class="bg-surface-container-low rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-surface-container-high transition-colors"
          @click="goToTool(tool)"
        >
          <div class="w-12 h-12 shrink-0 bg-surface-container-high rounded-xl flex items-center justify-center p-2 border border-white/10">
            <img 
              v-if="tool.icon"
              :src="`/images/${getFilename(tool.icon)}`" 
              :alt="tool.name"
              class="w-full h-full rounded-lg object-contain"
              @error="(e) => e.target.style.display = 'none'"
            >
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-title-md text-title-md text-on-surface truncate">{{ tool.name }}</h3>
            <p class="text-xs text-on-surface-variant truncate">{{ tool.slogan }}</p>
          </div>
          <span class="material-symbols-outlined text-primary-fixed-dim">arrow_forward</span>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="tools.length === 0" class="text-center py-16">
        <span class="material-symbols-outlined text-6xl text-on-surface-variant mb-4">search_off</span>
        <p class="text-on-surface-variant text-body-lg mb-6">No tools found in this category.</p>
        <a href="/" class="text-primary-fixed-dim hover:text-primary inline-flex items-center gap-2">
          <span class="material-symbols-outlined">arrow_back</span>
          Back to Home
        </a>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { toolsByCategory, categoryNames, categoryIcons } from '../data/tools.js'

const route = useRoute()
const router = useRouter()

const categoryKey = computed(() => route.params.categoryKey)

const tools = computed(() => {
  return toolsByCategory[categoryKey.value] || []
})

const currentCategoryName = computed(() => {
  return categoryNames[categoryKey.value] || 'Unknown Category'
})

const currentCategoryIcon = computed(() => {
  return categoryIcons[categoryKey.value] || 'smart_toy'
})

const getFilename = (url) => {
  if (!url) return ''
  return url.split('/').pop()
}

const goToTool = (tool) => {
  router.push(`/${tool.category}/${tool.id}`)
}
</script>
