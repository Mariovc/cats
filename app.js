// app.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// New route to get a picture of a random cat
app.get('/cat', async (req, res) => {
  try {
    // Hacer una solicitud a la API de gatos
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');

    const imageUrl = response.data[0].url;

    // Send the image URL as a response
    res.send(`<img src="${imageUrl}" alt="Random cat">`);
  } catch (error) {
    console.error('Error al obtener la imagen del gato', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`The server is running in http://localhost:${port}`);
});