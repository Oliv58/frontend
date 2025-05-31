import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    proxy: {
      '/rest': {
        target: 'https://127.0.0.1:3000',
        secure: false, 
        changeOrigin: true,
 
      },
    },
  },
})
