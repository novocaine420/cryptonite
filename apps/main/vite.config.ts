import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': {
        REACT_APP_AUTH0_DOMAIN: env.REACT_APP_AUTH0_DOMAIN,
        REACT_APP_AUTH0_CLIENT_ID: env.REACT_APP_AUTH0_CLIENT_ID
      }
    },
    plugins: [react(), tailwindcss()],
    server: { port: 4200 }
  };
});
