import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// ...existing code...
// ...existing code...

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // No custom server config needed for React SPA
})


