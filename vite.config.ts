import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/push-ups/',
  plugins: [
    react(),
    basicSsl(),
    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Push Ups',
        short_name: 'Push Ups',
        description: 'Push Ups Personal',
        theme_color: '#49f65d',
        background_color: '#ff7474',
        display: 'standalone',
        icons: [
          {
            src: '/icon-144.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
