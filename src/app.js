import express, { urlencoded } from 'express'; 
import morgan from 'morgan'; 
import languagesRoutes from './routes/language.routes'; 

const app = express(); 

// Configurando el puerto

app.set('port', 4000); 

// Middlewares

app.use(morgan('dev')); 
app.use(express.json()); 

// Utilizando las rutas 

app.use("/api/languages", languagesRoutes); 

export default app;