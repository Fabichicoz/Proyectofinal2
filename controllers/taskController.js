// Importación de funciones del modelo de tareas
// Estas funciones manejan la lógica de interacción con la base de datos
import { 
    getAllTasks, // Función para obtener todas las tareas
    createTask as modelCreateTask, // Función para crear una tarea
    updateTask as modelUpdateTask, // Función para actualizar una tarea
    deleteTask as modelDeleteTask // Función para eliminar una tarea
} from '../models/taskModel.js';

// Controlador para obtener todas las tareas
export const getTasks = async (req, res) => {
    try {
        const tasks = await getAllTasks(); // Llama a la función del modelo para obtener las tareas
        res.status(200).json(tasks); // Devuelve las tareas con un estado HTTP 200 (éxito)
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks', error }); // Manejo de errores con estado 500
    }
};

// Controlador para crear una nueva tarea
export const createTask = async (req, res) => {
    try {
        const task = req.body; // Obtiene la tarea del cuerpo de la solicitud
        await modelCreateTask(task); // Llama a la función del modelo para crear la tarea
        res.status(201).json({ message: 'Task created successfully' }); // Respuesta con estado 201 (creado)
    } catch (error) {
        res.status(400).json({ message: 'Error creating task', error }); // Manejo de errores con estado 400
    }
};

// Controlador para actualizar una tarea existente
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params; // Obtiene el ID de la tarea de los parámetros de la URL
        const task = req.body; // Obtiene los datos de la tarea del cuerpo de la solicitud
        await modelUpdateTask(id, task); // Llama a la función del modelo para actualizar la tarea
        res.status(200).json({ message: 'Task updated successfully' }); // Respuesta con estado 200 (éxito)
    } catch (error) {
        res.status(400).json({ message: 'Error updating task', error }); // Manejo de errores con estado 400
    }
};

// Controlador para eliminar una tarea
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params; // Obtiene el ID de la tarea de los parámetros de la URL
        await modelDeleteTask(id); // Llama a la función del modelo para eliminar la tarea
        res.status(200).json({ message: 'Task deleted successfully' }); // Respuesta con estado 200 (éxito)
    } catch (error) {
        res.status(400).json({ message: 'Error deleting task', error }); // Manejo de errores con estado 400
    }
};

