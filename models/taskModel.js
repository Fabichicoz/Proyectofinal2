// Importamos la función para conectar a la base de datos desde el archivo de configuración
import { connectToDB } from '../config/db.js';

// Función para obtener todas las tareas
export const getAllTasks = async () => {
    const pool = await connectToDB(); // Conexión al pool de la base de datos
    const result = await pool.request().query('SELECT * FROM Tasks'); // Consulta para obtener todas las tareas
    return result.recordset; // Devolvemos el conjunto de resultados (las tareas)
};

// Función para crear una nueva tarea
export const createTask = async (task) => {
    const pool = await connectToDB(); // Conexión al pool de la base de datos
    const result = await pool.request() // Crea una solicitud al pool
        .input('title', task.title) // Define el parámetro @title con el valor task.title
        .input('description', task.description) // Define el parámetro @description con el valor task.description
        .input('isCompleted', task.isCompleted) // Define el parámetro @isCompleted con el valor task.isCompleted
        .query(`
            INSERT INTO Tasks (title, description, isCompleted) 
            VALUES (@title, @description, @isCompleted) 
        `); // Consulta SQL para insertar una nueva tarea
    return result.rowsAffected; // Devolvemos el número de filas afectadas (1 si la tarea fue creada con éxito)
};

// Función para actualizar una tarea existente
export const updateTask = async (id, task) => {
    const pool = await connectToDB(); // Conexión al pool de la base de datos
    const result = await pool.request() // Crea una solicitud al pool
        .input('id', id) // Define el parámetro @id con el valor del ID de la tarea
        .input('title', task.title) // Define el parámetro @title con el valor task.title
        .input('description', task.description) // Define el parámetro @description con el valor task.description
        .input('isCompleted', task.isCompleted) // Define el parámetro @isCompleted con el valor task.isCompleted
        .query(`
            UPDATE Tasks 
            SET title = @title, description = @description, isCompleted = @isCompleted 
            WHERE id = @id
        `); // Consulta SQL para actualizar una tarea basada en su ID
    return result.rowsAffected; // Devolvemos el número de filas afectadas (1 si la tarea fue actualizada con éxito)
};

// Función para eliminar una tarea
export const deleteTask = async (id) => {
    const pool = await connectToDB(); // Conexión al pool de la base de datos
    const result = await pool.request() // Crea una solicitud al pool
        .input('id', id) // Define el parámetro @id con el valor del ID de la tarea
        .query('DELETE FROM Tasks WHERE id = @id'); // Consulta SQL para eliminar la tarea con el ID especificado
    return result.rowsAffected; // Devolvemos el número de filas afectadas (1 si la tarea fue eliminada con éxito)
};
