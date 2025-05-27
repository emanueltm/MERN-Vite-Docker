# Usa la imagen oficial de Node.js como base
FROM node:18
# Establece la carpeta de trabajo dentro del contenedor
WORKDIR /app
# Copia todos los archivos del proyecto al contenedor
COPY . .
# Instala las dependencias del frontend (React, Vite, etc.)
RUN npm install
# Ejecuta el proceso de construcción para generar la carpeta dist/
RUN npm run build
# Instala el paquete 'serve' globalmente para servir archivos estáticos
RUN npm install -g serve
# Expone el puerto 3000 (usado por serve para acceder al frontend)
EXPOSE 3000
# Comando que se ejecutará al iniciar el contenedor: servir la carpeta dist/
CMD ["serve", "-s", "dist"]