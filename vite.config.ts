import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
import basicSsl from '@vitejs/plugin-basic-ssl'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/push-ups/',
  plugins: [react(),
    basicSsl(),
    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Push Ups',
        short_name: 'Push Ups',
        description: 'Push Ups personal',
        theme_color: '#49f65d',
        display: 'standalone',
      }


  })],
})
