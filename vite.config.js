import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served at the site root (custom domain on Vercel), so no base path.
export default defineConfig({
  plugins: [react()],
})
