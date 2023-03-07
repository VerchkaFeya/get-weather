import React from 'react';
import { ForecastsList, Today } from './components';

function App() {
  const [data, setData] = React.useState<any>(null);
  const [lat, setLat] = React.useState<number>();
  const [lon, setLon] = React.useState<number>();

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  const clickHandler = async () => {
    const url = `/weather/${lat},${lon}`;
    const resp = await fetch(url);
    const json = await resp.json();
    console.log(json);
    setData(json);
  };

  console.log('DATA', data);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__button">
          <button className="button" onClick={clickHandler}>
            ПОЛУЧИТЬ ПРОГНОЗ ПОГОДЫ
          </button>
        </div>
        {data && (
          <>
            <div className="app__info">
              <h1>{data.geo_object.locality.name}</h1>
              <h2>{data.now_dt}</h2>
              <div className="app__coord">My current location: {`lat: ${lat} , lon: ${lon}`}</div>
              <div className="app__time">{`Сейчас: ${data.now}. Вчера в это время ${data.yesterday.temp}`}</div>
            </div>
            <div className="app__today">
              <Today today={data.fact} />
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
