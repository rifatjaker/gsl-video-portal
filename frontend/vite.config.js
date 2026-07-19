import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Repo name used as GitHub Pages subpath: https://rifatjaker.github.io/gsl-video-portal/
const PAGES_BASE = '/gsl-video-portal/'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? PAGES_BASE : '/',
  plugins: [react(), tailwindcss()],
}))
