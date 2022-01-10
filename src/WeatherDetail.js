import React from "react";
import "./WeatherDetail.css";

export default function WeatherDetail() {
  return (
    <div>
      <div className="WeatherDetail">
        <div className="row">
          <div className="col-6">
            <div>
              <h1 id="city">Davenport</h1>
              <ul>
                <li>
                  Last updated: <span id="date">1/9/2022 20:32</span>
                </li>
                <li id="weatherDescription">Cold</li>
                <li>
                  Humidity: <span id="humidity">45</span>%
                </li>
                <li>
                  Wind: <span id="wind">10</span> mph
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="clearfix temperature-container">
              <div className="weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="sunny"
                  id="icon"
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <span className="temperature" id="temperature">
              7
            </span>
            <span className="units">ºF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
