import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correct config for GitHub or Vercel deployment
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 This fixes blank page issue on deploy
})
