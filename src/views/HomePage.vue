<template>
  <div class="min-h-screen">
    <AppHeader />
    <main class="pt-24 pb-8">
      <section class="max-w-[1280px] mx-auto px-gutter">
        <!-- Hero Section -->
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-4 text-primary-fixed-dim">
            <span class="material-symbols-outlined text-3xl">auto_awesome</span>
          </div>
          <h1 class="text-5xl font-bold text-on-surface mb-4">AI NEXUS</h1>
          <p class="text-lg text-on-surface-variant max-w-3xl">
            Discover the top AI tools across {{ totalTools }} categories. Your definitive gateway to premium AI solutions.
          </p>
        </div>

        <!-- AI API Section Banner -->
        <router-link 
          to="/ai-api" 
          class="block power-card rounded-xl p-6 mb-12 hover:border-primary-fixed-dim/50 transition-colors"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl text-white">api</span>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-on-surface">AI API</h2>
                <p class="text-on-surface-variant">Premium API solutions for developers</p>
              </div>
            </div>
            <div class="flex items-center gap-2 text-primary-fixed-dim">
              <span class="text-lg font-medium">Explore</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </router-link>

        <!-- Category Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard 
            v-for="category in categoryList" 
            :key="category.key" 
            :category="category"
          />
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import CategoryCard from '../components/CategoryCard.vue'
import { categoryList, tools } from '../data/tools.js'

const totalTools = computed(() => tools.length)
</script>
