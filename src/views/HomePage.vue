<template>
  <div class="min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
    <AppHeader />
    
    <main class="max-w-container-max mx-auto pt-24 px-4 md:px-gutter lg:px-margin-desktop pb-20">
      <!-- Hero Section -->
      <section class="mb-12">
        <div class="flex items-center gap-3 mb-4 text-primary-fixed-dim">
          <span class="material-symbols-outlined text-3xl">auto_awesome</span>
          <span class="uppercase tracking-widest text-sm font-label-sm">Editor's Pick</span>
        </div>
        <h1 class="font-headline-xl text-headline-xl text-primary mb-4">Nexus Engine v4.0</h1>
        <p class="text-lg text-on-surface-variant max-w-3xl">
          Discover the next frontier of digital storytelling with our curated directory. Explore {{ totalTools }} hand-picked AI tools across {{ categories.length }} categories.
        </p>
        <div class="mt-6 flex gap-4">
          <a 
            href="/ai-api"
            class="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-title-md text-title-md hover:scale-105 active:scale-95 transition-transform"
          >
            <span class="material-symbols-outlined">launch</span> Try Now
          </a>
        </div>
      </section>

      <!-- AI API Banner -->
      <section class="mb-12">
        <a 
          href="/ai-api" 
          class="block bg-surface-container-low rounded-xl p-6 hover:border-primary-fixed-dim/50 transition-colors border border-transparent"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl text-white">api</span>
              </div>
              <div>
                <h2 class="font-headline-lg text-headline-lg text-on-surface">AI API</h2>
                <p class="text-on-surface-variant text-body-md">Premium API solutions for developers building the next generation of intelligent applications.</p>
              </div>
            </div>
            <div class="flex items-center gap-2 text-primary-fixed-dim">
              <span class="text-lg font-medium">Explore</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </a>
      </section>

      <!-- Category Matrix Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CategoryCard 
          v-for="category in categories" 
          :key="category.key" 
          :category="category"
          @select="onSelectTool"
          @view-all="onViewAll"
        />
      </section>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import CategoryCard from '../components/CategoryCard.vue'
import { categoryList, tools, categoryIcons } from '../data/tools.js'

const router = useRouter()

const categories = computed(() => {
  return categoryList.map(cat => ({
    ...cat,
    description: getDescription(cat.key),
    topTools: cat.topTools
  }))
})

const totalTools = computed(() => tools.length)

const descriptions = {
  writing: 'Enhance your copy, fix grammar, and generate creative content with expert AI writers.',
  creative: 'Explore next-level AI generators for professional artists and creative minds.',
  office: 'Revolutionize your work routine with intelligent productivity boosters.',
  image: 'Intelligent editing tools for enhancing, repairing, and transforming visual assets.',
  learning: 'Master new skills and explore AI with comprehensive learning resources.',
  chat: 'Engage with world-class language models for knowledge, roleplay, and productivity.',
  toolbox: 'Your gateway to the definitive directory of AI tools and platforms.',
  assistant: 'Empower your daily tasks with intelligent AI assistants and agents.',
  drawing: 'Elite text-to-image generators for professional artists and creative enthusiasts.',
  coding: 'Accelerate development with AI-powered coding assistants and platforms.',
  translation: 'Break language barriers with intelligent translation solutions.',
  marketing: 'Boost your brand and campaigns with AI-powered marketing solutions.',
  video: 'Transform ideas into cinematic experiences with industry-leading video AI.',
  design: 'Streamline your UI/UX and branding workflows with AI-powered design assistants.',
  audio: 'Create, edit, and enhance audio with cutting-edge AI technology.'
}

const getDescription = (key) => {
  return descriptions[key] || 'Discover the best AI tools in this category.'
}

const onSelectTool = (categoryKey, tool) => {
  router.push(`/${categoryKey}/${tool.id}`)
}

const onViewAll = (categoryKey) => {
  router.push(`/category/${categoryKey}`)
}
</script>
