import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    sourcemap: false,
    // Target older browsers for react-snap compatibility
    // react-snap uses Puppeteer 1.x with Chromium that doesn't support optional chaining
    target: 'es2019',
  },
})
