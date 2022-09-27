import mysql from 'promise-mysql'; 

import config from '../config'; 

// Configurando la conexión con la B.D

const connection = mysql.createConnection({

    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection = () => {
    return connection;
}

module.exports = { getConnection };

