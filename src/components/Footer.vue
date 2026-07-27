<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Service', href: '#' },
  { name: 'Contact', href: '#' },
]
</script>

<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-left">
        <span class="footer-logo">AI NEXUS</span>
        <span class="footer-copyright">© {{ currentYear }} AI NEXUS Directory. The definitive gateway to ML.</span>
      </div>
      <div class="footer-right">
        <a 
          v-for="link in footerLinks" 
          :key="link.name" 
          :href="link.href" 
          class="footer-link"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0a0a0f;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 30px 0;
}

.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-logo {
  font-family: 'Fjalla One', sans-serif;
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-copyright {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

.footer-right {
  display: flex;
  gap: 24px;
}

.footer-link {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
}

@media (max-width: 600px) {
  .footer-container {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-right {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  .footer-copyright {
    font-size: 12px;
  }
}
</style>
