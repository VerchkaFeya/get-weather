import React from 'react';
import { ForecastDay } from './ForecastDay';

type TForecastsList = {
  forecasts: any;
};

const ForecastsList = () => {
  const arr = [...new Array(5)];

  return (
    <div className="forecasts-list">
      {arr.map((item, index) => {
        return <ForecastDay key={index} />;
      })}
    </div>
  );
};

export { ForecastsList };
