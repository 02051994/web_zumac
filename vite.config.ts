import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  // Las rutas relativas funcionan tanto en github.io/web_zumac como en zumac.com.pe.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        servicio: resolve(process.cwd(), 'servicio.html'),
      },
    },
  },
});
