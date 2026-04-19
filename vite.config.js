import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

const r = (p) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': r('./src'),
      features: r('./src/features'),
      data: r('./src/data'),
      assets: r('./src/assets'),
      lib: r('./src/lib'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
  },
})
