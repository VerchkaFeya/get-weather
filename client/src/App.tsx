import React from 'react';
import { ForecastsList, TodayWeather } from './components';

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
  };

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__button">
          <button className="button" onClick={clickHandler}>
            ПОЛУЧИТЬ ПРОГНОЗ ПОГОДЫ
          </button>
        </div>
        <div className="app__info">
          <h1>city</h1>
          <h2>now date</h2>
          <h4>Location is: {`lat: ${lat} , lon: ${lon}`}</h4>
          <div className="app__time">{`Сейчас: ${'ВРЕМЯ'}. Вчера в это время ${'ВРЕМЯ'}`}</div>
        </div>
        <div className="app__today">
          <TodayWeather />
        </div>
        <div className="app__forecasts">
          <ForecastsList />
        </div>
      </div>
    </div>
  );
}

export default App;
