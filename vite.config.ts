import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import ViteFonts from 'vite-plugin-fonts'
import loadVersion from 'vite-plugin-package-version';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), ViteFonts({
      google: {
        families: ['Roboto']
      },
  })]
})
