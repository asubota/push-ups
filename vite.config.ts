import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl'

const base = '/push-ups'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    basicSsl(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },

      manifest: {
        name: 'Push Ups',
        short_name: 'Push Ups',
        description: 'Push Ups Personal',
        theme_color: '#b73a72',
        background_color: '#35a67e',
        display: 'standalone',
        screenshots: [
          {
            src: `${base}/screenshot-640-320.png`,
            sizes: '640x320',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Push Ups',
          },
          {
            src: `${base}/screenshot-320-640.png`,
            sizes: '320x640',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Push Ups',
          },
        ],
        icons: [
          {
            src: `${base}/icon-144.png`,
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: `${base}/icon-192.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `${base}/icon-512.png`,
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
