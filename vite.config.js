import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    // Gzip + Brotli compression for all assets
    compression({ algorithm: 'gzip' }),
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],
  build: {
    // Code split — each component chunk loaded only when needed
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Warn if any chunk exceeds 300KB
    chunkSizeWarningLimit: 300,
    // Asset inlining threshold — anything under 4KB inlined, above is a separate file
    assetsInlineLimit: 4096,
  },
  // Optimise deps on dev server startup
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
