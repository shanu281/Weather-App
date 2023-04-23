import { useState, useEffect } from "react";
import Search from "../Search";
import "./style.css";
import { message } from "antd";

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([{}]);

  const apiKey = "d524237890eb5e0c7a23e62d2cb19eb4";

  const displayMessage = ({ content = "", type = "success" }) => {
    messageApi.open({
      type,
      content,
    });
  };

  let getWeatherData = (event) => {
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
          event.target.value = "";
        });
    }
  };
console.log(weatherData)
  return (
    <center>

    <div className="container-sec">
      {contextHolder}
     
        <h1 className="header">Weather App</h1>
        <Search
          city={city}
          setCity={setCity}
          getWeatherData={getWeatherData}
          weatherData={weatherData}
          />
       
     
    </div>
          </center>
  );
}
export default App;
