<template>
  <router-link 
    :to="`/${tool.category}/${tool.id}`" 
    class="power-card rounded-xl p-4 flex items-center gap-3 group cursor-pointer"
  >
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center flex-shrink-0 overflow-hidden">
      <img 
        v-if="tool.icon" 
        :src="`/images/${getFilename(tool.icon)}`" 
        :alt="tool.name"
        class="w-8 h-8 object-contain"
        @error="onImgError"
      >
      <span v-else class="material-symbols-outlined text-2xl text-white/90">{{ icon }}</span>
    </div>
    <div class="flex-1 min-w-0">
      <h4 class="font-semibold text-on-surface group-hover:text-primary-fixed-dim transition-colors truncate text-sm">
        {{ tool.name }}
      </h4>
    </div>
  </router-link>
</template>

<script setup>
import { computed, ref } from 'vue'
import { categoryIcons } from '../data/tools.js'

const props = defineProps({
  tool: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const imgError = ref(false)

const icon = computed(() => {
  return categoryIcons[props.tool.category] || 'smart_toy'
})

const getFilename = (url) => {
  if (!url) return ''
  return url.split('/').pop()
}

const onImgError = (e) => {
  e.target.style.display = 'none'
  imgError.value = true
}
</script>
