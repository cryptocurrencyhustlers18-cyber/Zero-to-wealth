import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Zero-to-wealth/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    target: 'es2020'
  }
})
