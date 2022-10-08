import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      include: ['**/*.json', '**/*.less', '**/*.tsx'] // it's unnecessary and cause the page full-reload
    })
  ]
})
