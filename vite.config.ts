import { defineConfig } from 'vite';

export default defineConfig({
  // Las rutas relativas funcionan tanto en github.io/web_zumac como en zumac.com.pe.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    assetsInlineLimit: 0,
  },
});
