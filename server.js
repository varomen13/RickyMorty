const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importamos CORS

const app = express();
const PORT = 3000;

app.use(cors()); // Permitimos CORS para todas las rutas

// Ruta que consume la API de Rick and Morty
app.get('/api/personajes', async (req, res) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        const data = response.data.results; // solo agarramos los personajes
        res.json(data);
    } catch (error) {
        console.error('Error al obtener personajes:', error.message);
        res.status(500).json({ mensaje: 'Error al obtener personajes' });
    }
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api/personajes`);
});
