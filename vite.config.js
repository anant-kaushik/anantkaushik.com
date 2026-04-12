import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

const r = (p) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: r('./src/components'),
      containers: r('./src/containers'),
      utils: r('./src/utils'),
      views: r('./src/views'),
      routes: r('./src/routes'),
      assets: r('./src/assets'),
    },
  },
})
