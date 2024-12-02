import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';
import validateTask from '../validations/taskValidation.js';

const router = express.Router();

// Rutas CRUD
router.get('/', getTasks);                              // Obtener todas las tareas
router.post('/', validateTask, createTask);             // Crear nueva tarea
router.put('/:id', validateTask, updateTask);           // Actualizar tarea por ID
router.delete('/:id', deleteTask);                      // Eliminar tarea por ID

export default router;
