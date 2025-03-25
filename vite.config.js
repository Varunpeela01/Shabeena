import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets', // Ensure assets are output to the 'assets' folder
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Ensure assets keep their names with a hash
      },
    },
  },
});