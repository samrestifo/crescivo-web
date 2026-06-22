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
    rollupOptions: {
      output: {
        // Function form (not array) so the SSR prerender build doesn't fail
        // when react/react-dom are externalised. Keeps vendor-splitting on client.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
    chunkSizeWarningLimit: 300,
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
