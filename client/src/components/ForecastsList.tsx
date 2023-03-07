import React from 'react';
import { ForecastDay } from './ForecastDay';

type TForecastsList = {
  forecasts: any;
};

const ForecastsList = ({ forecasts }: TForecastsList) => {
  const arr = [...new Array(5)];

  return (
    <div className="forecasts-list">
      {forecasts.map((item: any, index: number) => {
        if (index !== 0) return <ForecastDay day={item} key={index} />;
      })}
    </div>
  );
};

export { ForecastsList };
