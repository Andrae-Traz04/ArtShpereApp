import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',           // tge root folder where index.html is located
  build: {
    outDir: 'dist'     // output folder for build
  }
});
