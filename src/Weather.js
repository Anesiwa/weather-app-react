import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "71955e43f0f1579de7523a19b31d90b6";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="row" id="search-form-row">
            <div className="col-6">
              <input
                type="search"
                id="location-input"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                className="form-control shadow-sm"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="form-control btn btn-light"
                id="searchButton"
                value="Search"
              />
            </div>
            <div className="col-3">
              <button id="currentLocation" className="btn btn-primary">
                Current
              </button>
            </div>
          </div>
        </form>
        <div className="weatherDetail">
          <h1 id="city">{weatherData.city}</h1>
          <ul>
            <li id="day">Monday 20:12</li>
            <li id="weatherDescription">{weatherData.description}</li>
          </ul>

          <div className="row allDescriptions mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="sunny"
                  id="icon"
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature" id="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="units">ºF</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Precipitation: <span id="precipitation">15</span>%
                </li>
                <li>
                  Humidity:{" "}
                  <span id="humidity">{Math.round(weatherData.humidity)}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{Math.round(weatherData.wind)}</span>{" "}
                  mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
