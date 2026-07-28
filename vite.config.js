import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { readFileSync, existsSync } from 'fs'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const urlPath = req.url.split('?')[0]
          
          // Let Vite handle these directly
          if (
            urlPath.startsWith('/src/') ||
            urlPath.startsWith('/node_modules/') ||
            urlPath.startsWith('/@') ||
            urlPath.endsWith('.js') ||
            urlPath.endsWith('.css') ||
            urlPath.endsWith('.map') ||
            urlPath.startsWith('/images/') ||
            urlPath === '/favicon.ico'
          ) {
            return next()
          }
          
          // Root path: serve static index.html directly (bypass Vite transform)
          if (urlPath === '/' || urlPath === '/index.html') {
            const filePath = resolve(__dirname, 'index.html')
            if (existsSync(filePath)) {
              const html = readFileSync(filePath, 'utf-8')
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              return res.end(html)
            }
            return next()
          }
          
          // For app.html and ai_api.html, let Vite handle (it will inject client script)
          if (urlPath === '/app.html' || urlPath === '/ai_api.html') {
            return next()
          }
          
          // Check if it's a file in public directory
          const publicFile = resolve(__dirname, 'public', '.' + urlPath)
          if (existsSync(publicFile)) {
            return next()
          }
          
          // For all other paths that look like routes (no file extension or .html),
          // serve the Vue SPA by rewriting to /app.html
          if (!urlPath.includes('.') || urlPath.endsWith('.html')) {
            req.url = '/app.html' + req.url.substring(urlPath.length)
            return next()
          }
          
          next()
        })
      }
    }
  ],
  server: {
    port: 5180,
    strictPort: true,
    open: '/'
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app.html')
      }
    }
  }
})
