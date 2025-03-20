import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/ReactCvPortal/", // Viktigt för att CSS och JS ska hittas på GitHub Pages
  plugins: [react()],
});
