<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import { categories } from '@/data/ai-tools'
</script>

<template>
  <div class="app">
    <Header />
    
    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container hero-container">
          <div class="hero-badge">EDITOR'S PICK</div>
          <h1 class="hero-title">Nexus Engine v4.0</h1>
          <p class="hero-description">Discover the next frontier of digital storytelling with our curated directory.</p>
          <button class="hero-button">
            Try Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>

      <!-- Categories Grid -->
      <section class="categories-section">
        <div class="container">
          <div class="categories-grid">
            <CategoryCard 
              v-for="category in categories" 
              :key="category.id" 
              :category="category"
            />
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background-color: #0a0a0f;
}

.main-content {
  padding-bottom: 40px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #0a0a15 0%, #121020 50%, #0f0f1a 100%);
  position: relative;
  overflow: hidden;
  margin-bottom: 32px;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.015"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
}

.hero-section::after {
  content: '';
  position: absolute;
  top: -40%;
  right: -15%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(0, 212, 255, 0.05) 50%, transparent 70%);
  border-radius: 50%;
}

.hero-container {
  position: relative;
  z-index: 1;
  padding: 50px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero-badge {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 16px;
  background: rgba(0, 212, 255, 0.15);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: #00d4ff;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: fit-content;
}

.hero-title {
  font-family: 'Fjalla One', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin: 0;
}

.hero-description {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  max-width: 450px;
  margin: 0;
  line-height: 1.6;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 24px;
  background: linear-gradient(135deg, #00d4ff 0%, #0ea5e9 100%);
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
}

/* Categories Section */
.categories-section {
  padding: 16px 0;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 1200px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 38px;
  }

  .hero-description {
    font-size: 15px;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
}

@media (max-width: 600px) {
  .hero-container {
    padding: 40px 16px;
  }

  .hero-title {
    font-size: 28px;
  }

  .hero-description {
    font-size: 13px;
  }

  .hero-button {
    padding: 10px 22px;
    font-size: 13px;
  }

  .categories-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
