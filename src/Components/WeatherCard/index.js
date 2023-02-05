import React from "react";
import Card from "antd/es/card/Card";
import "./style.css";

function WeatherCard(props) {
    const {sys ={}, main={}, wind={}, visibility, name} = props
  return (
    <Card
      className="card"
      title="Weather Report "
      bordered={false}
      style={{
        width: 400,
      }}
    >
      <h3>
        {name}, {sys.country}
      </h3>
      <p>
        Temprature is:
        {Math.round(((main.temp - 32) * 5) / 9)}° C
      </p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} mb</p>
      <p>Wind Speed: {wind.speed} km/h</p>
      <p>Visibility: {visibility} Mtr</p>
    </Card>
  );
}
export default WeatherCard;
