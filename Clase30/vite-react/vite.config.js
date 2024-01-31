import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true /* Se coloca true para poder observar los estilos propios de css aplicados */
  }
})


/* Es importante configurar acá la ubicación de los archivos CSS para poder reconocerlos usando devSourceMap */