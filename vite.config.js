import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envPlugin from 'vite-plugin-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    envPlugin({dotenv: ".env", systemPrefix: "VITE_"})
  ],  
  // base: "5arSanti.github.io",
})
