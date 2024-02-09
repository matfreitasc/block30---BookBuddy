import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@api': path.resolve(__dirname, './src/api/'),
      '@routes': path.resolve(__dirname, './src/routes/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
    },
  },
})
