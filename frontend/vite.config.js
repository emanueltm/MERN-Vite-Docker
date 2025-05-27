// Importa la función para definir configuración de Vite
import { defineConfig } from 'vite'

// Importa el plugin de React necesario para proyectos con JSX
import react from '@vitejs/plugin-react'

// Exporta la configuración personalizada para Vite
export default defineConfig({
  // Define los plugins que usará Vite (en este caso, React)
  plugins: [react()],

  // Configuración del servidor de desarrollo
  server: {
    // Define un proxy: redirige llamadas que empiecen con /api al backend
    proxy: {
      '/api': 'http://backend:5000'
    }
  }
})