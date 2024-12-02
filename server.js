import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/tasks', taskRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
