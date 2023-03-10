import axios from 'axios';
import React from 'react';
import { ForecastsList, Today } from './components';
import { TData } from './types';
import { getDate } from './utils';

function App() {
  const [data, setData] = React.useState<TData | null>(null);
  const [lat, setLat] = React.useState<number>();
  const [lon, setLon] = React.useState<number>();

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  const clickHandler = async () => {
    const resp = await axios.get(`/weather/${lat},${lon}`);
    setData(resp.data);
  };

  return (
    <div className="app">
      <div className="app__container">
        {!data && (
          <div className="app__button">
            <button className="button" onClick={clickHandler}>
              ПОЛУЧИТЬ ПРОГНОЗ ПОГОДЫ
            </button>
          </div>
        )}

        {data && (
          <>
            <div className="app__info">
              <h1>{`${data.geo_object.locality.name} - ${getDate(data.now_dt)}`}</h1>
              <div className="app__coord">My current location: {`lat: ${lat} , lon: ${lon}`}</div>
            </div>
            <div className="app__today">
              <Today
                today={data.fact}
                forecast={data.forecasts[0]}
                yesterdayTemp={data.yesterday.temp}
              />
            </div>
            <div className="app__forecasts">
              <ForecastsList forecasts={data.forecasts} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
