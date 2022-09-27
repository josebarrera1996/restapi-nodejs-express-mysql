import app from './app'; 

// Función que nos ayudará a ejecutar el servidor de esta api

const main = () => {

    app.listen(app.get('port')); // Escuchando en el puerto definido en 'app'
    console.log(`Server on port ${app.get('port')}`);
};

main();