import express from 'express';
import axios from 'axios';

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get('/weather/:latlon', async (req, res) => {
  const latlon = req.params.latlon.split(',');
  const lat = latlon[0];
  const lon = latlon[1];

  console.log(lat, lon);

  const config = {
    method: 'GET',
    url: `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}`,
    headers: {
      'X-Yandex-API-Key': '8e016b2a-76b9-4c7a-bb18-5715b635e6a9',
    },
  };

  const axiosResp = await axios(config);
  res.send(axiosResp.data);
});
