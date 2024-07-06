import { defineConfig } from 'vite'
import dotenv from 'dotenv';

import react from '@vitejs/plugin-react'

// Cargar variables de entorno desde un archivo específico
dotenv.config({ path: './proyect-secrets.env' });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
