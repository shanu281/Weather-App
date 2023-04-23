import React from "react";
import Card from "antd/es/card/Card";
import "./style.css";

function WeatherCard(props) {
  const { sys = {}, main = {}, wind = {}, dt, visibility, name } = props;
  return (
   

    <div className="card">
      <div className="container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>

      <div className="card-header">
        <h3>
          {name}
          <br />
          ({sys.country})
        </h3>
        <span className="date">{new Date(dt * 1000).toLocaleString()}</span>
      </div>
      <div className="temp-sec">
        <span className="temp">{Math.round(((main.temp - 32) * 5) / 9)}°</span>
      </div>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} mb</p>
      <p>Wind Speed: {wind.speed} km/h</p>
      <p>Visibility: {visibility} Mtr</p>
      <div className="temp-scale">
        <span>Celcius</span>
      </div>
      
    </div>
  );
}
export default WeatherCard;
