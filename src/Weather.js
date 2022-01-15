import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-form" id="search-form">
        <div className="row" id="search-form-row">
          <div className="col-6">
            <input
              type="search"
              id="location-input"
              placeholder="Enter a city"
              autocomplete="off"
              autofocus="on"
              className="form-control shadow-sm"
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
        <h1 id="city">Davenport</h1>
        <ul>
          <li id="date"> 1/14/2022 20:12</li>
          <li id="weatherDescription">Cold</li>
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
                  7
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
                Humidity: <span id="humidity">45</span>%
              </li>
              <li>
                Wind: <span id="wind">10</span> mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
