import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import babel from '@rolldown/plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  build: { cssCodeSplit: false },
  plugins: [
    tanstackRouter({ target: 'react' }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  base: '/ffxiv-market-analyzer/',
});
