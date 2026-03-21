import { defineConfig } from 'vitest/config';
import path from "path";
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
  resolve: {
    dedupe: ['react-router', 'react-router-dom'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
