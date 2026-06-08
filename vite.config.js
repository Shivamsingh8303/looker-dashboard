import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        secure: true,
        followRedirects: true,
        rewrite: () =>
          '/macros/s/AKfycbwgv0JqEZOGV-2HGDibSlpnJnJNdBh9SQwlvJJEnwkCcQyaUveQ21K1ZgO3ba_u7ahzMg/exec'
      }
    }
  }
})