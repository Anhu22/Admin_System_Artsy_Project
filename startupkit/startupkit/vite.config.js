import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'legacy-js-api', 
          'mixed-decls', 
          'import', 
          'global-builtin', 
          'slash-div', 
          'color-functions',
          'global-builtin-functions'
        ],
        api: 'modern-compiler'
      }
    }
  },
  server: {
    host: true
  }
})
