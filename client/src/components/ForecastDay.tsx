import React from 'react';

type TForecastDay = {
  day: any;
};

const ForecastDay = () => {
  return (
    <div className="day">
      <div className="day__date">{`date`}</div>
      <img
        className="day__icon"
        src={`https://yastatic.net/weather/i/icons/funky/dark/${'icon'}.svg`}
        alt=""
        width={60}
      />
      <div className="day__max">{`temp max°`}</div>
      <div className="day__min">{`temp min°`}</div>
      <div className="day__wind">{`wind speed м/с, wind dir `}</div>
    </div>
  );
};

export { ForecastDay };
