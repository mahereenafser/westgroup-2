import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  site: 'https://westgroupfinancial.vercel.app',
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress certain warnings
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
          warn(warning);
        }
      }
    }
  }
});
