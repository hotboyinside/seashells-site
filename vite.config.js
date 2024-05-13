import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    rollupOptions: {
      main: resolve(root, 'pages', 'Home', 'index.html'),
      afisha: resolve(root, 'pages', 'Afisha', 'index.html')
    }
  }
})
