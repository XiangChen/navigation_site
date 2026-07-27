<script setup lang="ts">
import { computed } from 'vue'
import type { Category } from '@/data/ai-tools'
import ProductItem from './ProductItem.vue'

const props = defineProps<{
  category: Category
}>()

const categoryStyle = computed(() => {
  const styles: Record<string, { iconBg: string; iconColor: string; buttonBg: string; buttonBorder: string; buttonColor: string; headerIcon: string }> = {
    writing: { iconBg: 'rgba(0, 212, 255, 0.15)', iconColor: '#00d4ff', buttonBg: 'rgba(0, 212, 255, 0.1)', buttonBorder: 'rgba(0, 212, 255, 0.3)', buttonColor: '#00d4ff', headerIcon: 'book' },
    creative: { iconBg: 'rgba(168, 85, 247, 0.15)', iconColor: '#a855f7', buttonBg: 'rgba(168, 85, 247, 0.1)', buttonBorder: 'rgba(168, 85, 247, 0.3)', buttonColor: '#a855f7', headerIcon: 'sparkles' },
    office: { iconBg: 'rgba(0, 212, 255, 0.15)', iconColor: '#00d4ff', buttonBg: 'rgba(0, 212, 255, 0.1)', buttonBorder: 'rgba(0, 212, 255, 0.3)', buttonColor: '#00d4ff', headerIcon: 'briefcase' },
    graphics: { iconBg: 'rgba(0, 212, 255, 0.15)', iconColor: '#00d4ff', buttonBg: 'rgba(0, 212, 255, 0.1)', buttonBorder: 'rgba(0, 212, 255, 0.3)', buttonColor: '#00d4ff', headerIcon: 'image' },
    video: { iconBg: 'rgba(249, 115, 22, 0.15)', iconColor: '#f97316', buttonBg: 'rgba(249, 115, 22, 0.1)', buttonBorder: 'rgba(249, 115, 22, 0.3)', buttonColor: '#f97316', headerIcon: 'video' },
    design: { iconBg: 'rgba(0, 212, 255, 0.15)', iconColor: '#00d4ff', buttonBg: 'rgba(0, 212, 255, 0.1)', buttonBorder: 'rgba(0, 212, 255, 0.3)', buttonColor: '#00d4ff', headerIcon: 'palette' },
    chat: { iconBg: 'rgba(168, 85, 247, 0.15)', iconColor: '#a855f7', buttonBg: 'rgba(168, 85, 247, 0.1)', buttonBorder: 'rgba(168, 85, 247, 0.3)', buttonColor: '#a855f7', headerIcon: 'message-circle' },
    painting: { iconBg: 'rgba(168, 85, 247, 0.15)', iconColor: '#a855f7', buttonBg: 'rgba(168, 85, 247, 0.1)', buttonBorder: 'rgba(168, 85, 247, 0.3)', buttonColor: '#a855f7', headerIcon: 'pen-tool' },
    learning: { iconBg: 'rgba(34, 197, 94, 0.15)', iconColor: '#22c55e', buttonBg: 'rgba(34, 197, 94, 0.1)', buttonBorder: 'rgba(34, 197, 94, 0.3)', buttonColor: '#22c55e', headerIcon: 'graduation-cap' },
    programming: { iconBg: 'rgba(0, 212, 255, 0.15)', iconColor: '#00d4ff', buttonBg: 'rgba(0, 212, 255, 0.1)', buttonBorder: 'rgba(0, 212, 255, 0.3)', buttonColor: '#00d4ff', headerIcon: 'code' },
    translation: { iconBg: 'rgba(59, 130, 246, 0.15)', iconColor: '#3b82f6', buttonBg: 'rgba(59, 130, 246, 0.1)', buttonBorder: 'rgba(59, 130, 246, 0.3)', buttonColor: '#3b82f6', headerIcon: 'globe' },
    marketing: { iconBg: 'rgba(168, 85, 247, 0.15)', iconColor: '#a855f7', buttonBg: 'rgba(168, 85, 247, 0.1)', buttonBorder: 'rgba(168, 85, 247, 0.3)', buttonColor: '#a855f7', headerIcon: 'trending-up' },
    audio: { iconBg: 'rgba(236, 72, 153, 0.15)', iconColor: '#ec4899', buttonBg: 'rgba(236, 72, 153, 0.1)', buttonBorder: 'rgba(236, 72, 153, 0.3)', buttonColor: '#ec4899', headerIcon: 'music' },
    assistant: { iconBg: 'rgba(34, 197, 94, 0.15)', iconColor: '#22c55e', buttonBg: 'rgba(34, 197, 94, 0.1)', buttonBorder: 'rgba(34, 197, 94, 0.3)', buttonColor: '#22c55e', headerIcon: 'bot' },
    toolbox: { iconBg: 'rgba(0, 212, 255, 0.15)', iconColor: '#00d4ff', buttonBg: 'rgba(0, 212, 255, 0.1)', buttonBorder: 'rgba(0, 212, 255, 0.3)', buttonColor: '#00d4ff', headerIcon: 'wrench' },
  }
  return styles[props.category.id] || styles.writing
})
</script>

<template>
  <div class="category-card">
    <div class="category-header">
      <div 
        class="category-icon" 
        :style="{ backgroundColor: categoryStyle.iconBg, color: categoryStyle.iconColor }"
      >
        <svg v-if="categoryStyle.headerIcon === 'book'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'sparkles'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'briefcase'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'image'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'video'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'palette'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="12.5" r=".5"/><circle cx="6.5" cy="7.5" r=".5"/><circle cx="9.5" cy="15.5" r=".5"/>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'message-circle'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'pen-tool'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'graduation-cap'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'code'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'globe'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2v20M2 12h20M12 2l7.07 7.07M12 22l-7.07-7.07"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'trending-up'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'music'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
        <svg v-else-if="categoryStyle.headerIcon === 'bot'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          <line x1="9" y1="17" x2="9.01" y2="17"/>
          <line x1="15" y1="17" x2="15.01" y2="17"/>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div class="category-title">{{ category.name }}</div>
    </div>
    <div class="category-description">{{ category.description }}</div>
    <div class="product-list">
      <ProductItem 
        v-for="product in category.products" 
        :key="product.rank" 
        :product="product"
      />
    </div>
    <button 
      class="category-button"
      :style="{ 
        backgroundColor: categoryStyle.buttonBg, 
        borderColor: categoryStyle.buttonBorder, 
        color: categoryStyle.buttonColor 
      }"
    >
      SEE ALL {{ category.nameEn }} TOOLS
    </button>
  </div>
</template>

<style scoped>
.category-card {
  background-color: #1a1a24;
  border-radius: 12px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
}

.category-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.category-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.category-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 0.5px;
}

.category-description {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 14px;
  line-height: 1.5;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.category-button {
  width: 100%;
  margin-top: 14px;
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
}

@media (max-width: 600px) {
  .category-card {
    padding: 14px;
  }

  .category-title {
    font-size: 14px;
  }

  .category-icon {
    width: 24px;
    height: 24px;
  }

  .category-description {
    font-size: 12px;
  }

  .category-button {
    padding: 8px 12px;
    font-size: 10px;
    margin-top: 12px;
  }
}
</style>
