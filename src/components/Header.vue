<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'BLOG', href: '#' },
  { name: 'CONTACT US', href: '#' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <div class="logo">
        <span class="logo-text">AI NEXUS</span>
      </div>
      
      <div class="header-right">
        <nav class="nav">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href" 
            class="nav-link"
          >
            {{ link.name }}
          </a>
        </nav>

        <button class="action-btn primary">
          SUBMIT TOOL
        </button>
        
        <button class="mobile-menu-btn" @click="toggleMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <template v-if="!isMenuOpen">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </template>
            <template v-else>
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </template>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="mobile-menu">
      <a 
        v-for="link in navLinks" 
        :key="link.name" 
        :href="link.href" 
        class="mobile-nav-link"
        @click="isMenuOpen = false"
      >
        {{ link.name }}
      </a>
      <button class="mobile-action-btn primary">SUBMIT TOOL</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.logo-text {
  font-family: 'Fjalla One', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #00d4ff;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav {
  display: flex;
  gap: 24px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    color: #ffffff;
  }
}

.action-btn {
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.primary {
    background: linear-gradient(135deg, #00d4ff 0%, #0ea5e9 100%);
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
}

.mobile-menu-btn {
  display: none;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu {
  display: none;
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-nav-link {
  display: block;
  padding: 12px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    color: #ffffff;
  }
}

.mobile-action-btn {
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.primary {
    background: linear-gradient(135deg, #00d4ff 0%, #0ea5e9 100%);
    color: #ffffff;
  }
}

@media (max-width: 1024px) {
  .nav {
    display: none;
  }

  .action-btn {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-menu {
    display: block;
  }
}

@media (max-width: 600px) {
  .logo-text {
    font-size: 20px;
  }

  .header-container {
    height: 56px;
  }
}
</style>
