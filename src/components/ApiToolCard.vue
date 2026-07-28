<template>
  <div class="power-card rounded-xl p-stack-lg flex flex-col md:flex-row gap-gutter group relative overflow-hidden">
    <div class="absolute top-0 right-0 p-4">
      <span v-if="rank <= 3" class="text-primary-fixed-dim font-title text-6xl italic select-none">{{ rankDisplay }}</span>
      <span v-else class="text-primary-fixed-dim/20 font-title text-6xl italic select-none">{{ rankDisplay }}</span>
    </div>
    <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 overflow-hidden">
      <img 
        v-if="hasIcon" 
        :src="`/images/${iconFilename}`" 
        :alt="tool.name"
        class="w-16 h-16 object-contain"
        @error="imgError = true"
      >
      <span v-else class="material-symbols-outlined text-5xl text-white/90">{{ defaultIcon }}</span>
    </div>
    <div class="flex-1">
      <div class="flex flex-wrap items-center gap-3 mb-2">
        <h3 class="font-title text-xl text-on-surface group-hover:text-primary-fixed-dim transition-colors">{{ tool.name }}</h3>
        <span class="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-tighter">{{ tool.category }}</span>
      </div>
      <p class="font-body text-on-surface-variant max-w-2xl mb-4">
        {{ tool.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in parseTags" 
          :key="tag"
          class="bg-surface-variant/50 text-on-surface-variant px-3 py-1 rounded-full text-xs border border-white/5"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="flex flex-col justify-center gap-2">
      <a 
        :href="getSearchUrl" 
        target="_blank"
        class="bg-primary-fixed-dim text-on-primary-fixed px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
      >
        View Details <span class="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  tool: {
    type: Object,
    required: true
  },
  rank: {
    type: Number,
    default: 0
  },
  defaultIcon: {
    type: String,
    default: 'api'
  }
})

const imgError = ref(false)

const rankDisplay = computed(() => String(props.rank).padStart(2, '0'))

const hasIcon = computed(() => {
  return props.tool.icon && !imgError.value
})

const iconFilename = computed(() => {
  if (!props.tool.icon) return ''
  return props.tool.icon.split('/').pop()
})

const parseTags = computed(() => {
  if (!props.tool.tags) return ['API', 'Developer']
  return props.tool.tags.split(/[,，、]/).map(t => t.trim()).filter(Boolean).slice(0, 3)
})

const getSearchUrl = computed(() => {
  const query = encodeURIComponent(props.tool.name)
  return `https://www.google.com/search?q=${query}+AI+API`
})
</script>
