// Importamos las funciones necesarias desde 'express-validator'
import { body, validationResult } from 'express-validator';

// Definimos un conjunto de validaciones para las tareas
const validateTask = [
    // Validamos que el campo 'title' no esté vacío
    body('title')
        .notEmpty() // La validación falla si el campo está vacío
        .withMessage('Title is required'), // Mensaje de error personalizado en caso de fallo

    // Validamos que el campo 'description' sea opcional
    body('description')
        .optional(), // Permite que el campo 'description' esté ausente o vacío sin generar error

    // Validamos que el campo 'isCompleted' sea un booleano
    body('isCompleted')
        .isBoolean() // La validación falla si el campo no es de tipo booleano
        .withMessage('isCompleted must be a boolean'), // Mensaje de error personalizado

    // Middleware para procesar y verificar los resultados de las validaciones
    (req, res, next) => {
        const errors = validationResult(req); // Recopila los errores de validación
        if (!errors.isEmpty()) {
            // Si hay errores, respondemos con un código 400 (bad request)
            return res.status(400).json({ errors: errors.array() }); // Devolvemos un arreglo con los errores
        }
        next(); // Si no hay errores, pasamos al siguiente middleware/controlador
    },
];

export default validateTask;
