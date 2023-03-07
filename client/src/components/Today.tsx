import React from 'react';

type TTodayProps = {
  today: any;
};

const Today = ({ today }: TTodayProps) => {
  return (
    <div className="today">
      <div className="today__icon">
        <img
          src={`https://yastatic.net/weather/i/icons/funky/dark/${today.icon}.svg`}
          alt=""
          width={130}
        />
      </div>
      <div className="today__main">
        <div className="today__temp">
          <p className="today__temp-fact">{`${today.temp}°`}</p>
          <p className="today__temp-feels-like">Ощущается как {`${today.feels_like}°`}</p>
        </div>
        <div className="today__temp-range">
          <p className="today__temp-min">min</p>
          <p className="today__temp-max">max</p>
        </div>
        <div className="today__wind">
          <div className="today__wind-speed">{`${today.wind_speed} м/с`}</div>
          <div className="today__wind-dir">{today.wind_dir}</div>
        </div>
      </div>
    </div>
  );
};

export { Today };
