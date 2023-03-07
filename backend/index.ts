import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = 3001;
const apiKey = process.env.API_KEY;
// api-key: 8e016b2a-76b9-4c7a-bb18-5715b635e6a9

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get('/weather/:latlon', async (req, res) => {
  const latlon = req.params.latlon.split(',');
  const lat: string = latlon[0];
  const lon: string = latlon[1];

  const config = {
    method: 'GET',
    url: `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&limit=6`,
    headers: {
      'X-Yandex-API-Key': apiKey,
    },
  };

  const axiosResp = await axios(config);
  res.send(axiosResp.data);
});
