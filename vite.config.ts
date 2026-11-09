import { defineConfig } from 'vite'

// GitHub Pages serves the site from /earth-duet/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/earth-duet/' : '/',
})
