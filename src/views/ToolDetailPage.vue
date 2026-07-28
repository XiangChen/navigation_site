<template>
  <div class="min-h-screen">
    <AppHeader />
    <main class="pt-24 pb-8">
      <div class="max-w-[1280px] mx-auto px-gutter">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 mb-6 text-sm text-on-surface-variant">
          <router-link to="/" class="hover:text-primary transition-colors">Home</router-link>
          <span class="material-symbols-outlined text-xs">chevron_right</span>
          <router-link 
            v-if="tool" 
            :to="`/category/${tool.category}`" 
            class="hover:text-primary transition-colors"
          >
            {{ tool.categoryName }}
          </router-link>
          <span class="material-symbols-outlined text-xs">chevron_right</span>
          <span class="text-primary-fixed-dim font-medium truncate">{{ tool?.name || 'Loading...' }}</span>
        </nav>

        <!-- Loading State -->
        <div v-if="!tool" class="text-center py-16">
          <div class="inline-block w-12 h-12 border-4 border-primary-fixed-dim border-t-transparent rounded-full animate-spin"></div>
          <p class="text-on-surface-variant mt-4">Loading tool details...</p>
        </div>

        <!-- Tool Detail -->
        <template v-else>
          <!-- Header Section -->
          <div class="flex items-start gap-6 mb-8">
            <!-- Icon -->
            <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img 
                v-if="hasIcon" 
                :src="`/images/${iconFilename}`" 
                :alt="tool.name"
                class="w-16 h-16 object-contain"
                @error="imgError = true"
              >
              <span v-else class="material-symbols-outlined text-5xl text-white/90">{{ categoryIcon }}</span>
            </div>
            
            <!-- Info -->
            <div class="flex-1">
              <h1 class="text-4xl font-bold text-on-surface mb-3">{{ tool.name }}</h1>
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{{ tool.categoryName }}</span>
                <span v-if="tool.level" class="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium">
                  {{ tool.level }}
                </span>
                <span v-if="tool.rating" class="flex items-center gap-1 text-amber-400 text-sm">
                  <span class="material-symbols-outlined text-sm">star</span>
                  {{ tool.rating }}
                </span>
              </div>
              <p v-if="tool.slogan" class="text-lg text-on-surface-variant italic">{{ tool.slogan }}</p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-4 mb-8">
            <a 
              :href="getSearchUrl" 
              target="_blank"
              class="bg-primary-fixed-dim text-on-primary-fixed px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Visit Website <span class="material-symbols-outlined text-sm">open_in_new</span>
            </a>
            <button 
              v-if="tool.status"
              class="border border-outline-variant text-on-surface-variant px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <span class="w-2 h-2 rounded-full" :class="statusColor"></span>
              {{ tool.status }}
            </button>
          </div>

          <!-- Tags -->
          <div v-if="tool.tags" class="flex flex-wrap gap-2 mb-8">
            <span 
              v-for="tag in parseTags" 
              :key="tag"
              class="bg-surface-variant/50 text-on-surface-variant px-4 py-2 rounded-full text-sm border border-white/5"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Content Sections -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Main Content (2/3 width) -->
            <div class="lg:col-span-2 space-y-8">
              <!-- Description -->
              <section v-if="tool.description" class="power-card rounded-xl p-6">
                <h2 class="text-xl font-semibold text-on-surface mb-4">
                  <span class="material-symbols-outlined text-primary-fixed-dim mr-2">info</span>
                  Overview
                </h2>
                <p class="text-on-surface-variant leading-relaxed whitespace-pre-wrap">{{ tool.description }}</p>
              </section>

              <!-- Target Audience -->
              <section v-if="tool.targetAudience" class="power-card rounded-xl p-6">
                <h2 class="text-xl font-semibold text-on-surface mb-4">
                  <span class="material-symbols-outlined text-primary-fixed-dim mr-2">groups</span>
                  Target Audience
                </h2>
                <p class="text-on-surface-variant leading-relaxed whitespace-pre-wrap">{{ tool.targetAudience }}</p>
              </section>

              <!-- Main Features -->
              <section v-if="tool.mainFeatures" class="power-card rounded-xl p-6">
                <h2 class="text-xl font-semibold text-on-surface mb-4">
                  <span class="material-symbols-outlined text-primary-fixed-dim mr-2">features</span>
                  Main Features
                </h2>
                <ul class="space-y-3">
                  <li 
                    v-for="(feature, index) in parseList(tool.mainFeatures)" 
                    :key="index"
                    class="flex items-start gap-3 text-on-surface-variant"
                  >
                    <span class="material-symbols-outlined text-primary-fixed-dim mt-0.5">check_circle</span>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </section>

              <!-- Highlights -->
              <section v-if="tool.highlights" class="power-card rounded-xl p-6">
                <h2 class="text-xl font-semibold text-on-surface mb-4">
                  <span class="material-symbols-outlined text-primary-fixed-dim mr-2">star</span>
                  Highlights
                </h2>
                <ul class="space-y-3">
                  <li 
                    v-for="(highlight, index) in parseList(tool.highlights)" 
                    :key="index"
                    class="flex items-start gap-3 text-on-surface-variant"
                  >
                    <span class="material-symbols-outlined text-amber-400 mt-0.5">auto_awesome</span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </section>

              <!-- Intro -->
              <section v-if="tool.intro" class="power-card rounded-xl p-6">
                <h2 class="text-xl font-semibold text-on-surface mb-4">
                  <span class="material-symbols-outlined text-primary-fixed-dim mr-2">article</span>
                  Introduction
                </h2>
                <p class="text-on-surface-variant leading-relaxed whitespace-pre-wrap">{{ tool.intro }}</p>
              </section>
            </div>

            <!-- Sidebar (1/3 width) -->
            <div class="space-y-6">
              <!-- Info Card -->
              <div class="power-card rounded-xl p-6">
                <h3 class="text-lg font-semibold text-on-surface mb-4">Quick Info</h3>
                <div class="space-y-4">
                  <div v-if="tool.monthlyTraffic" class="flex items-center justify-between">
                    <span class="text-on-surface-variant">Monthly Traffic</span>
                    <span class="font-medium text-on-surface">{{ tool.monthlyTraffic }}</span>
                  </div>
                  <div v-if="tool.rating" class="flex items-center justify-between">
                    <span class="text-on-surface-variant">Rating</span>
                    <span class="font-medium text-amber-400">⭐ {{ tool.rating }}</span>
                  </div>
                  <div v-if="tool.level" class="flex items-center justify-between">
                    <span class="text-on-surface-variant">Level</span>
                    <span class="font-medium text-on-surface">{{ tool.level }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-on-surface-variant">Category</span>
                    <span class="font-medium text-primary-fixed-dim">{{ tool.categoryName }}</span>
                  </div>
                </div>
              </div>

              <!-- Related Tools -->
              <div v-if="relatedTools.length > 0" class="power-card rounded-xl p-6">
                <h3 class="text-lg font-semibold text-on-surface mb-4">Related Tools</h3>
                <div class="space-y-2">
                  <router-link 
                    v-for="related in relatedTools" 
                    :key="related.id"
                    :to="`/${related.category}/${related.id}`"
                    class="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img 
                        v-if="getIconFilename(related.icon)" 
                        :src="`/images/${getIconFilename(related.icon)}`" 
                        :alt="related.name"
                        class="w-6 h-6 object-contain"
                      >
                      <span v-else class="material-symbols-outlined text-sm text-white">{{ categoryIcon }}</span>
                    </div>
                    <span class="text-sm text-on-surface group-hover:text-primary-fixed-dim truncate">{{ related.name }}</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- Not Found -->
        <div v-if="!found && !loading" class="text-center py-16">
          <span class="material-symbols-outlined text-6xl text-on-surface-variant mb-4">error_outline</span>
          <h2 class="text-2xl font-semibold text-on-surface mb-2">Tool Not Found</h2>
          <p class="text-on-surface-variant mb-6">Sorry, we couldn't find the tool you're looking for.</p>
          <router-link to="/" class="text-primary-fixed-dim hover:text-primary inline-flex items-center gap-2">
            <span class="material-symbols-outlined">arrow_back</span>
            Back to Home
          </router-link>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { tools, categoryIcons } from '../data/tools.js'

const route = useRoute()
const tool = ref(null)
const loading = ref(true)
const imgError = ref(false)

const categoryIcon = computed(() => {
  if (tool.value) {
    return categoryIcons[tool.value.category] || 'smart_toy'
  }
  return 'smart_toy'
})

const hasIcon = computed(() => {
  return tool.value?.icon && !imgError.value
})

const iconFilename = computed(() => {
  if (!tool.value?.icon) return ''
  return tool.value.icon.split('/').pop()
})

const found = computed(() => !!tool.value)

const parseTags = computed(() => {
  if (!tool.value?.tags) return []
  return tool.value.tags.split(/[,，、]/).map(t => t.trim()).filter(Boolean)
})

const parseList = (text) => {
  if (!text) return []
  return text.split(/[,，、\n]/).map(t => t.trim()).filter(Boolean)
}

const statusColor = computed(() => {
  const status = tool.value?.status?.toLowerCase() || ''
  if (status.includes('free') || status.includes('active')) return 'bg-green-500'
  if (status.includes('beta')) return 'bg-yellow-500'
  if (status.includes('paid') || status.includes('premium')) return 'bg-purple-500'
  return 'bg-gray-500'
})

const getSearchUrl = computed(() => {
  if (!tool.value) return '#'
  const query = encodeURIComponent(tool.value.name)
  return `https://www.google.com/search?q=${query}`
})

const relatedTools = computed(() => {
  if (!tool.value) return []
  const sameCategory = tools.filter(
    t => t.category === tool.value.category && t.id !== tool.value.id
  )
  return sameCategory.slice(0, 5)
})

const getIconFilename = (url) => {
  if (!url) return ''
  return url.split('/').pop()
}

const loadTool = () => {
  loading.value = true
  imgError.value = false
  const category = route.params.category
  const id = route.params.id
  
  tool.value = tools.find(
    t => t.category === category && t.id === id
  )
  loading.value = false
}

watch(
  () => [route.params.category, route.params.id],
  () => loadTool(),
  { immediate: true }
)
</script>
