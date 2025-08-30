import React, { useState } from "react";
import "./App.css";

function App() {
  let [input, setInput] = useState("");
  let [data1, setData] = useState("");
  let [temp, setTemp] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind1, setWind] = useState("");
  let [weather, setWeather] = useState("");
  let [icon, setIcon] = useState("");

  function weatherAPI() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d9f4da3df684c0a88693992e59088b36&units=metric`
    )
      .then((data) => data.json())
      .then((data) => {
        setData(data.name);
        setTemp(data.main.temp);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setWeather(data.weather[0].main);
        setIcon(data.weather[0].icon); // ✅ icon code set kar rahe hain
      });
  }

  return (
    <div className="app">
      <h1 className="title">🌤️ Weather App</h1>
      <div className="search-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter city name"
        />
        <button onClick={weatherAPI}>Search</button>
      </div>

      {data1 && (
        <div className="card">
          <h2 className="city">{data1}</h2>
          <h1 className="temp">{temp}°C</h1>
          <p className="condition">{weather}</p>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather icon"
              className="weather-icon"
            />
          )}
          <div className="details">
            <p>💨 Wind: {wind1} m/s</p>
            <p>💧 Humidity: {humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
