import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nightshift-016-wordcount/',
  plugins: [react()],
})
