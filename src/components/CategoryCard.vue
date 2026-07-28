<template>
  <div class="power-card rounded-xl p-0 overflow-hidden flex flex-col">
    <div class="p-4 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
      <span class="material-symbols-outlined text-primary-fixed-dim" style="font-variation-settings: 'FILL' 1;">
        {{ category.icon }}
      </span>
      <h3 class="font-semibold text-white">{{ category.name }}</h3>
      <span class="ml-auto text-xs text-on-surface-variant">{{ category.count }} tools</span>
    </div>
    <div class="p-4 flex-grow">
      <ul class="space-y-2">
        <li 
          v-for="(tool, index) in category.topTools" 
          :key="tool.id"
        >
          <router-link 
            :to="`/${category.key}/${tool.id}`"
            class="flex items-center gap-3 group cursor-pointer hover:text-primary-fixed-dim transition-colors py-1"
          >
            <span class="text-xs font-mono text-on-surface-variant w-4">{{ index + 1 }}.</span>
            <span class="text-sm font-medium truncate">{{ tool.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="p-3 border-t border-white/5 bg-white/[0.02]">
      <router-link 
        :to="`/category/${category.key}`"
        class="w-full text-center text-sm text-primary-fixed-dim hover:text-primary transition-colors py-2 block"
      >
        View All <span class="material-symbols-outlined text-xs">arrow_forward</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
})
</script>
