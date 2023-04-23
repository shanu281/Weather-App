import "./style.css";
import WeatherCard from "../WeatherCard";

function Search(props) {
  const handleChange = (e) => {
    e.preventDefault();
    props.setCity(e.target.value);
  };

  return (
    <div className="weather-conatiner">
      <input
        placeholder="Enter a city"
        className="input"
        onChange={handleChange}
        onKeyPress={props.getWeatherData}
      />
      <div className="site-card-border-less-wrapper"></div>
      {props.city === "" ? (
        <h2>Enter any city name to get weather report</h2>
      ) : (
        <WeatherCard {...props.weatherData} />
      )}
    </div>
  );
}
export default Search;
