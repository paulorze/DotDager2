import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure this points to your project root
  build: {
    outDir: 'dist', // Ensure the output directory is properly defined
  },
})