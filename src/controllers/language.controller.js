import { getConnection } from '../database/db'; 

const getLanguages = async (req, res) => {

    try {

        const connection = await getConnection(); 
        const result = await connection.query('SELECT * FROM languages'); 
        res.json(result); 

    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
};


const getLanguage = async (req, res) => { 

    try {

        const { id } = req.params; 
        const connection = await getConnection(); // Realizamos la conexión
        const result = await connection.query('SELECT * FROM languages WHERE id=?', [id]);  
        res.json(result); 

    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
};


const addLenguage = async (req, res) => {

    try {

        const connection = await getConnection(); 
        // Recibiendo los datos que son producto de la petición de tipo 'POST'
        console.log(req.body); 
        const { name, programmers} = req.body; 

        if (name === undefined || programmers === undefined) { 
            res.status(400).json({ message: "Bad Request. Please fill all fields." }); 
        }

        const newLanguage = { name, programmers }; 
        const result = await connection.query('INSERT INTO languages SET ?', newLanguage); 
        res.json({ message: "Language added" }); 

    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
}


const updateLanguage = async (req, res) => {

    try {

        const { id } = req.params; 
        // Recibiendo los datos que son producto de la petición de tipo 'PUT'
        const connection = await getConnection();
        const { name, programmers} = req.body;
        
        if (id === undefined || name === undefined || programmers === undefined) { 
            res.status(400).json({ message: "Bad Request. Please fill all fields." }); 
        }

        const languageToEdit = { id, name, programmers };
        const result = await connection.query('UPDATE languages SET ? WHERE id = ?', [languageToEdit, id]); 
        res.json({ message: "Language edited" }); 

    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
}


const deleteLanguage = async (req, res) => { 

    try {

        const { id } = req.params;
        const connection = await getConnection(); 
        const result = await connection.query('DELETE FROM languages WHERE id=?', [id]); 
        res.json({ message: "Language deleted :)" });
        
    } catch (error) {
        res.status(500); 
        res.send(error.message); 
    }
};


export const methods = {

    getLanguages,
    getLanguage,
    addLenguage,
    updateLanguage,
    deleteLanguage
};