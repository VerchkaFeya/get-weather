import React from 'react';

const TodayWeather = () => {
  return (
    <div className="today">
      <div className="today__icon"></div>
      <div className="today__main">
        <div className="today__temp">
          <p className="today__temp-fact">{`${'-5'}°`}</p>
          <p className="today__temp-feel-like">Ощущается как {`${'-9'}°`}</p>
        </div>
        <div className="today__temp-range">
          <p className="today__temp-min">-20</p>
          <p className="today__temp-max">14</p>
        </div>
        <div className="today__wind">
          <div className="today__wind-speed">{`${'2'} м/с`}</div>
          <div className="today__wind-dir">{`NE`}</div>
        </div>
      </div>
    </div>
  );
};

export { TodayWeather };
