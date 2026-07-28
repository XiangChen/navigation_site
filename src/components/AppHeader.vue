<template>
  <header class="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-white/10 shadow-sm">
    <div class="flex items-center justify-between w-full max-w-[1280px] mx-auto px-gutter h-16">
      <router-link to="/" class="flex items-center">
        <span class="font-title font-bold text-primary-fixed-dim tracking-tighter uppercase text-lg">AI NEXUS</span>
      </router-link>
      <div class="flex items-center gap-6">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path" 
          class="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest"
          :class="{ 'text-primary-fixed-dim': isActive(link.path) }"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { path: '/', name: 'HOME' },
  { path: '/ai-api', name: 'AI API' },
  { path: '#blog', name: 'BLOG' },
  { path: '#submit', name: 'SUBMIT TOOL' },
  { path: '#contact', name: 'CONTACT US' }
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  if (path === '/ai-api') return route.path.startsWith('/ai-api')
  return false
}
</script>
