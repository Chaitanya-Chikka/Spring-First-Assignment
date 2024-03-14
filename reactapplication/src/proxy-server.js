//proxy-server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/springapod', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: 'LUaz0QCBUBaFXeRpCcOpBDLLg1Sb4wydlV8r0hU3',
        
    },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from NASA API' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});