<script setup lang="ts">
import type { Product } from '@/data/ai-tools'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="product-item">
    <span class="product-rank">{{ product.rank }}.</span>
    <span class="product-name">{{ product.name }}</span>
  </div>
</template>

<style scoped>
.product-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
}

.product-rank {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
  width: 24px;
  flex-shrink: 0;
}

.product-name {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 600px) {
  .product-item {
    padding: 5px 0;
    font-size: 13px;
    gap: 6px;
  }

  .product-rank {
    font-size: 13px;
    width: 20px;
  }

  .product-name {
    font-size: 13px;
  }
}
</style>
