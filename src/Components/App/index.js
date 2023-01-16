import { useState } from "react";
import Search from "../Search";
import "./style.css";
import { message } from "antd";
import { Card } from "antd";
function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([{}]);

  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  const displayMessage = ({ content = "", type = "success" }) => {
    messageApi.open({
      type,
      content,
    });
  };

  const getWeatherData = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            displayMessage({ type: "error", content: data.message });
          } else {
            displayMessage({ content: "found" });
          }
          setWeatherData(data);
          
        });
      };
    }; 
  

  return (
    <div className="container">
      {contextHolder}
      <center>
        <h1 className="header">Weather App</h1>
        <Search
          city={city}
          setCity={setCity}
          getWeatherData={getWeatherData}
          weatherData={weatherData}
        />
      </center>
    </div>
  );
}
export default App;
