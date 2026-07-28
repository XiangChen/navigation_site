<template>
  <div class="min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
    <AppHeader />
    
    <main class="max-w-container-max mx-auto pt-24 px-4 md:px-gutter lg:px-margin-desktop pb-20">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 mb-8 text-on-surface-variant font-label-sm text-label-sm">
        <a href="/" class="hover:text-primary transition-colors">Home</a>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <a v-if="tool" :href="`/category/${tool.category}`" class="hover:text-primary transition-colors">{{ tool.categoryName }}</a>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <span class="text-on-surface">{{ tool?.name || 'Loading...' }}</span>
      </nav>

      <!-- Loading -->
      <div v-if="!tool" class="text-center py-16">
        <div class="inline-block w-12 h-12 border-4 border-primary-fixed-dim border-t-transparent rounded-full animate-spin"></div>
        <p class="text-on-surface-variant mt-4">Loading tool details...</p>
      </div>

      <!-- Tool Details -->
      <template v-else>
        <div class="grid grid-cols-1 gap-8">
          <!-- Left Column: Primary Details -->
          <div class="w-full space-y-stack-lg">
            <!-- Tool Header -->
            <div class="glass-card rounded-xl p-8 flex flex-col items-center gap-8 relative overflow-hidden text-center">
              <div class="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full"></div>
              <div class="relative z-10 w-full flex flex-col items-center gap-8">
                <div class="flex flex-col items-center gap-6">
                  <div class="w-24 h-24 shrink-0 bg-surface-container-high rounded-2xl flex items-center justify-center p-2 border border-white/10 shadow-2xl">
                    <img 
                      :alt="`${tool.name} Logo`" 
                      :src="iconSrc" 
                      class="w-full h-full rounded-xl object-contain"
                      @error="onImgError"
                    >
                  </div>
                  <div class="flex flex-col items-center gap-3">
                    <h1 class="font-headline-xl text-headline-xl text-primary">{{ tool.name }}</h1>
                    <span 
                      v-if="tool.level" 
                      class="bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-label-sm font-label-sm border border-white/10 w-fit"
                    >
                      {{ tool.level }}
                    </span>
                  </div>
                </div>

                <div class="flex flex-col items-center gap-6 mt-4 w-full max-w-2xl">
                  <div class="flex flex-col md:flex-row items-stretch gap-4 w-full">
                    <a 
                      :href="officialUrl" 
                      target="_blank"
                      class="flex-1 inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-title-md text-title-md hover:scale-105 active:scale-95 transition-transform"
                    >
                      <span class="material-symbols-outlined">launch</span> Official Website
                    </a>
                    <div class="flex-[1.5] p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between text-left">
                      <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-primary">sell</span>
                        <div>
                          <div class="text-primary font-bold text-body-md">优惠信息</div>
                          <div class="text-on-surface-variant text-label-sm">新用户首月订阅享 20% 折扣</div>
                        </div>
                      </div>
                      <button class="px-4 py-1.5 bg-primary text-on-primary rounded-full text-label-sm font-bold shrink-0">立即领取</button>
                    </div>
                  </div>
                </div>

                <div class="space-y-6 text-left w-full">
                  <p v-if="tool.description" class="text-body-lg font-body-lg text-on-surface-variant leading-relaxed w-full">{{ tool.description }}</p>
                  
                  <div class="grid grid-cols-1 gap-8 pt-4">
                    <!-- 需求人群定位 -->
                    <section v-if="tool.targetAudience" class="w-full">
                      <h3 class="text-primary font-title-md mb-3 flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">groups</span> 需求人群定位
                      </h3>
                      <p class="text-on-surface-variant text-body-md leading-relaxed whitespace-pre-wrap">{{ tool.targetAudience }}</p>
                    </section>

                    <!-- 主要功能 -->
                    <section v-if="tool.mainFeatures" class="w-full">
                      <h3 class="text-primary font-title-md mb-3 flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">features</span> 主要功能
                      </h3>
                      <ul class="text-on-surface-variant text-body-md list-disc list-inside space-y-2">
                        <li v-for="(feature, index) in parseList(tool.mainFeatures)" :key="index" class="">{{ feature }}</li>
                      </ul>
                    </section>

                    <!-- 产品特色 -->
                    <section v-if="tool.highlights" class="w-full">
                      <h3 class="text-primary font-title-md mb-3 flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">star</span> 产品特色
                      </h3>
                      <ul class="text-on-surface-variant text-body-md list-disc list-inside space-y-2">
                        <li v-for="(highlight, index) in parseList(tool.highlights)" :key="index" class="">{{ highlight }}</li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { tools } from '../data/tools.js'

const route = useRoute()
const tool = ref(null)
const imgError = ref(false)

const iconSrc = computed(() => {
  if (!tool.value?.icon || imgError.value) {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="%2300f0ff"%3E%3Cpath d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/%3E%3C/svg%3E`
  }
  const filename = tool.value.icon.split('/').pop()
  return `/images/${filename}`
})

const officialUrl = computed(() => {
  if (!tool.value) return '#'
  const query = encodeURIComponent(tool.value.name)
  return `https://www.google.com/search?q=${query}`
})

const parseList = (text) => {
  if (!text) return []
  return text.split(/\n/).map(t => t.trim()).filter(Boolean)
}

const onImgError = () => {
  imgError.value = true
}

const loadTool = () => {
  imgError.value = false
  const category = route.params.category
  let id = route.params.id
  if (typeof id === 'string' && id.endsWith('.html')) {
    id = id.slice(0, -5)
  }
  tool.value = tools.find(t => t.category === category && t.id === id)
  
  if (tool.value) {
    document.title = `AI NEXUS - ${tool.value.name} Details`
  }
}

watch(
  () => [route.params.category, route.params.id],
  () => loadTool(),
  { immediate: true }
)
</script>
