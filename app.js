// app.js
const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const app = express();
const baseUrl = 'https://api.thecatapi.com/';
const port = 3000;
const apiKey = 'live_SXUOVUMtNZbjnNwOff959alhjKDB7PhgX4OtlKT07PiKbmHQEAlAFaWcC703gUVG'

// New route to get a picture of a random cat
app.get('/cats', async (req, res) => {
  const data = {
    limit: 10,
    breed_ids: 'beng',
    api_key: apiKey
  };
  const queryParams = '?' + querystring.stringify(data);

  try {
    const url = baseUrl + 'v1/images/search' + queryParams;
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error('Error getting cat image', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`The server is running in http://localhost:${port}`);
});