import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'client/src',         // dove sta il tuo index.html
  build: {
    outDir: '../dist',        // esce in client/dist
    emptyOutDir: true,
  },
  plugins: [react()],
})
