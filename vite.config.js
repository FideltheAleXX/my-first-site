import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: 'https://FideltheAleXX.github.io/my-first-site/',
  plugins: [react()],
});
