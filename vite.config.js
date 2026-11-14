import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is the GitHub Pages project path (https://<user>.github.io/deala-offer/).
export default defineConfig({
  base: '/deala-offer/',
  plugins: [react()],
})
