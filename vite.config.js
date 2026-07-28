import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { readFileSync, existsSync } from 'fs'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'serve-static-html',
      configureServer(server) {
        const serveFile = (req, res, next) => {
          const urlPath = req.url.split('?')[0]
          
          if (urlPath === '/' || urlPath === '/index.html') {
            try {
              const filePath = resolve(__dirname, 'index.html')
              if (existsSync(filePath)) {
                const html = readFileSync(filePath, 'utf-8')
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(html)
                return
              }
            } catch (err) {
              // continue
            }
          }
          
          if (urlPath.endsWith('.html') && !urlPath.startsWith('/src/')) {
            try {
              const filePath = resolve(__dirname, '.' + urlPath)
              if (existsSync(filePath)) {
                const html = readFileSync(filePath, 'utf-8')
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(html)
                return
              }
            } catch (err) {
              // continue
            }
          }
          
          next()
        }
        
        server.middlewares.use(serveFile)
      },
      configurePreviewServer(server) {
        const serveFile = (req, res, next) => {
          const urlPath = req.url.split('?')[0]
          
          if (urlPath === '/' || urlPath === '/index.html') {
            try {
              const filePath = resolve(__dirname, 'index.html')
              if (existsSync(filePath)) {
                const html = readFileSync(filePath, 'utf-8')
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(html)
                return
              }
            } catch (err) {
              // continue
            }
          }
          
          if (urlPath.endsWith('.html') && !urlPath.startsWith('/src/')) {
            try {
              const filePath = resolve(__dirname, '.' + urlPath)
              if (existsSync(filePath)) {
                const html = readFileSync(filePath, 'utf-8')
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(html)
                return
              }
            } catch (err) {
              // continue
            }
          }
          
          next()
        }
        
        server.middlewares.use(serveFile)
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
        app: resolve(__dirname, 'app.html')
      }
    }
  }
})
