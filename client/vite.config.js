import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    plugins: [react()],
    base: '/torch-app-capstone/',
    watch: {
      usePolling: true,
    },
  },
});
