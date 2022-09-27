
import { Router } from "express"; 

import { methods as languageController } from '../controllers/language.controller'; 

// Creando el enrutador, para manejar las rutas de la app

const router = Router(); 

// Definiendo las rutas de la app

router.get('/', languageController.getLanguages); // Ruta para acceder a los lenguajes

router.get('/:id', languageController.getLanguage); // Ruta para acceder a un lenguaje en particular

router.post('/', languageController.addLenguage); // Ruta para crear un nuevo lenguaje

router.put('/:id', languageController.updateLanguage); // Ruta para actualizar un nuevo lenguaje

router.delete('/:id', languageController.deleteLanguage); // Ruta para eliminar un nuevo lenguaje

export default router;