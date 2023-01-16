import "./style.css";
import { Card } from "antd";
function Search(props) {
  const handleChange = (e) => {
    e.preventDefault();
    props.setCity(e.target.value);
    
  };

  return (
    <div>
      <input
        placeholder="Enter a city"
        className="input"
        onChange={handleChange}
        value={props.city}
        onKeyPress={props.getWeatherData }
      />
      <div className="site-card-border-less-wrapper"></div>
      {props.city === "" ? (
        <h2>Enter any city name to get weather report</h2>
      ) : (
        <Card
          className="card"
          title="Weather Report "
          bordered={false}
          style={{
            width: 400,
          }}
        >
            <h3>
            {props.weatherData.name}, {props.weatherData.sys.country}
          </h3>
          <p>
            Temprature is:
            {Math.round(((props.weatherData.main.temp - 32) * 5) / 9)}° C
          </p>
          <p>Humidity: {props.weatherData.main.humidity}%</p>
          <p>Pressure: {props.weatherData.main.pressure} mb</p>
          <p>Wind Speed: {props.weatherData.wind.speed} km/h</p>
          <p>Visibility: {props.weatherData.visibility} Mtr</p>  
        </Card>
      )}
    </div>
  );
}
export default Search;
