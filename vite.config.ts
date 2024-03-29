import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: [
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
    ]
  }
})
