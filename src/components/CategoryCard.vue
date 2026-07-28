<template>
  <div class="category-card bg-surface-container-low rounded-xl p-0 overflow-hidden flex flex-col h-[480px]">
    <div class="p-4 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
      <span 
        class="material-symbols-outlined text-primary-fixed-dim" 
        style="font-variation-settings: 'FILL' 1;"
      >
        {{ category.icon }}
      </span>
      <h3 class="font-title-md text-white">{{ category.name }}</h3>
    </div>
    <div class="p-4 flex-grow overflow-y-auto custom-scrollbar">
      <p class="text-xs text-on-surface-variant mb-4">{{ category.description }}</p>
      <ul class="space-y-3">
        <li 
          v-for="(tool, index) in category.topTools" 
          :key="tool.id"
          class="flex items-center gap-3 group cursor-pointer hover:text-primary-fixed-dim transition-colors"
          @click="$emit('select', category.key, tool)"
        >
          <span class="text-xs font-mono text-on-surface-variant w-4">{{ index + 1 }}.</span>
          <span class="text-sm font-medium">{{ tool.name }}</span>
        </li>
      </ul>
    </div>
    <div class="p-4 border-t border-white/5 bg-white/[0.01]">
      <button 
        class="w-full py-2 bg-primary-fixed-dim/10 hover:bg-primary-fixed-dim text-primary-fixed-dim hover:text-on-primary-fixed rounded text-xs font-bold transition-all uppercase tracking-wider"
        @click="$emit('view-all', category.key)"
      >
        SEE ALL {{ category.name.replace('AI ', '').toUpperCase() }} TOOLS
      </button>
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

defineEmits(['select', 'view-all'])
</script>
