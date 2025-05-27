# Usa la imagen oficial de Node.js versión 18
FROM node:18
# Define la carpeta de trabajo dentro del contenedor
WORKDIR /app
# Copia todos los archivos del backend al contenedor
COPY . .
# Instala las dependencias especificadas en package.json
RUN npm install
# Expone el puerto 5000 (puerto en el que corre el servidor Express)
EXPOSE 5000
# Comando que ejecuta el servidor al iniciar el contenedor
CMD ["node", "index.js"]