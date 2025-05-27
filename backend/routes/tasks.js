// Importa Express y crea un router
const express = require('express');
const router = express.Router();

// Importa Mongoose para definir el esquema y modelo
const mongoose = require('mongoose');

// Define el esquema de una tarea (solo tiene un campo: título)
const taskSchema = new mongoose.Schema({
  title: String
});

// Crea el modelo basado en el esquema anterior
const Task = mongoose.model('Task', taskSchema);

// Ruta GET para obtener todas las tareas desde MongoDB
router.get('/', async (req, res) => {
  const tasks = await Task.find();   // Busca todas las tareas en la colección
  res.json(tasks);                   // Devuelve el resultado en formato JSON
});

// Ruta POST para crear una nueva tarea
router.post('/', async (req, res) => {
  const task = new Task({ title: req.body.title }); // Crea una nueva tarea con el título enviado
  await task.save();                                // Guarda la tarea en la base de datos
  res.json(task);                                   // Devuelve la tarea guardada
});

// Exporta el router para ser usado en index.js
module.exports = router;