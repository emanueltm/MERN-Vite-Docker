// Importa el framework Express para crear el servidor
const express = require('express');

// Importa Mongoose para conectarse a MongoDB
const mongoose = require('mongoose');

// Importa CORS para permitir peticiones del frontend (evita errores de política de origen)
const cors = require('cors');

// Importa las rutas definidas en routes/tasks.js
const taskRoutes = require('./routes/tasks');

// Crea una instancia de Express
const app = express();

// Habilita CORS en el servidor
app.use(cors());

// Permite leer cuerpos de peticiones en formato JSON
app.use(express.json());

// Conexión a la base de datos MongoDB usando la URL definida como variable de entorno
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB conectado")) // Mensaje en consola si se conecta con éxito
  .catch(err => console.error("Error al conectar:", err)); // Mensaje si hay error

// Asigna las rutas de /api/tasks al archivo de rutas importado
app.use('/api/tasks', taskRoutes);

// Inicia el servidor en el puerto 5000 y muestra un mensaje en consola
app.listen(5000, () => console.log("Servidor en puerto 5000"));