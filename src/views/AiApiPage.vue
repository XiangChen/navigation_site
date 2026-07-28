<template>
  <div class="min-h-screen">
    <AppHeader />
    <main class="pt-24 pb-8 min-h-screen">
      <div class="max-w-[1280px] mx-auto px-gutter">
        <!-- Hero Section -->
        <header class="mb-8">
          <div class="flex items-center gap-3 mb-2 text-primary-fixed-dim">
            <span class="material-symbols-outlined text-3xl">api</span>
            <span class="uppercase tracking-widest text-sm">Infrastructure</span>
          </div>
          <h1 class="text-4xl font-bold text-on-surface mb-2">AI API</h1>
          <p class="text-lg text-on-surface-variant max-w-4xl">
            Premium API solutions for developers building the next generation of intelligent applications.
          </p>
        </header>

        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 mb-8 text-sm text-on-surface-variant">
          <a href="/" class="hover:text-primary transition-colors">Home</a>
          <span class="material-symbols-outlined text-xs">chevron_right</span>
          <span class="text-primary-fixed-dim font-medium">AI API</span>
        </nav>

        <!-- Tools by Category -->
        <div v-for="(catData, catKey) in apiToolsByCategory" :key="catKey" class="mb-12">
          <!-- Category Header -->
          <div class="mb-6 mt-8">
            <div class="flex items-center gap-2 mb-2">
              <span class="material-symbols-outlined text-primary-fixed-dim">{{ catData.icon }}</span>
              <span class="uppercase tracking-widest text-sm text-primary-fixed-dim">{{ catData.name }}</span>
            </div>
            <h2 class="text-2xl font-semibold text-on-surface">{{ catData.name }}</h2>
          </div>

          <!-- Tools Grid -->
          <div class="grid grid-cols-1 gap-6">
            <ApiToolCard 
              v-for="(tool, index) in catData.tools" 
              :key="tool.id"
              :tool="tool"
              :rank="index + 1"
              :defaultIcon="catData.icon"
            />
          </div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import ApiToolCard from '../components/ApiToolCard.vue'
import { apiToolsByCategory } from '../data/api.js'
</script>
