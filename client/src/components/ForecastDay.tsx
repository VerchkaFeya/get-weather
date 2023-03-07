import React from 'react';

type TForecastDay = {
  day: any;
};

const ForecastDay = ({ day }: TForecastDay) => {
  return (
    <div className="day">
      <div className="day__date">{`${day.date}`}</div>
      <img
        className="day__icon"
        src={`https://yastatic.net/weather/i/icons/funky/dark/${day.parts.day.icon}.svg`}
        alt=""
        width={60}
      />
      <div className="day__max">{`${day.parts.day.temp_max}°`}</div>
      <div className="day__min">{`${day.parts.night.temp_min}°`}</div>
      <div className="day__wind">{`${day.parts.day.wind_speed} м/с, ${day.parts.day.wind_dir}`}</div>
    </div>
  );
};

export { ForecastDay };
