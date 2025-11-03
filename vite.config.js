import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({

  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    hmr: {
      host: process.env.REPLIT_DEV_DOMAIN || 'localhost',
      clientPort: 443,
      protocol: 'wss'
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5000
  }

  plugins: [
    vue(),
    tailwindcss(),
  ],

})
