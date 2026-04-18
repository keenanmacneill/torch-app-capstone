import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/torch-app-capstone/',
  plugins: [react()],
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
