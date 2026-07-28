<template>
  <div class="min-h-screen">
    <AppHeader />
    <main class="pt-24 pb-8">
      <div class="max-w-[1280px] mx-auto px-gutter">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 mb-6 text-sm text-on-surface-variant">
          <router-link to="/" class="hover:text-primary transition-colors">Home</router-link>
          <span class="material-symbols-outlined text-xs">chevron_right</span>
          <span class="text-primary-fixed-dim font-medium">{{ currentCategoryName }}</span>
        </nav>

        <!-- Category Header -->
        <header class="mb-8">
          <div class="flex items-center gap-3 mb-2 text-primary-fixed-dim">
            <span class="material-symbols-outlined text-3xl">{{ currentCategoryIcon }}</span>
          </div>
          <h1 class="text-4xl font-bold text-on-surface mb-2">{{ currentCategoryName }}</h1>
          <p class="text-on-surface-variant">{{ tools.length }} tools found</p>
        </header>

        <!-- Tools List -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ToolCard 
            v-for="tool in tools" 
            :key="tool.id"
            :tool="tool"
          />
        </div>

        <!-- Empty State -->
        <div v-if="tools.length === 0" class="text-center py-16">
          <span class="material-symbols-outlined text-6xl text-on-surface-variant mb-4">search_off</span>
          <p class="text-on-surface-variant">No tools found in this category.</p>
          <router-link to="/" class="text-primary-fixed-dim hover:text-primary mt-4 inline-block">Back to Home</router-link>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import ToolCard from '../components/ToolCard.vue'
import { toolsByCategory, categoryNames, categoryIcons } from '../data/tools.js'

const route = useRoute()
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
</script>
