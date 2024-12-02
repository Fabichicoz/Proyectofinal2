const express = require('express');
const app = express();

app.get('/tareas', (req, res) => {
  // devuelve una lista de tareas
  res.json([{ id: 1, nombre: 'Tarea 1' }, { id: 2, nombre: 'Tarea 2' }]);
});

app.post('/tareas', (req, res) => {
  // crea una nueva tarea
  const tarea = req.body;
  res.json({ id: 3, nombre: tarea.nombre });
});

app.put('/tareas/:id', (req, res) => {
  // actualiza una tarea existente
  const id = req.params.id;
  const tarea = req.body;
  res.json({ id: id, nombre: tarea.nombre });
});

app.delete('/tareas/:id', (req, res) => {
  // elimina una tarea existente
  const id = req.params.id;
  res.json({ mensaje: 'Tarea eliminada' });
});

app.listen(3000, () => {
  console.log('API escuchando en el puerto 3000');
});