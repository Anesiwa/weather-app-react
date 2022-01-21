import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li id="weatherDescription">{props.description}</li>
      </ul>

      <div className="row allDescriptions mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} />

            <div className="float-left">
              <span className="temperature" id="temperature">
                {Math.round(props.data.temperature)}
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
              <span id="humidity">{Math.round(props.data.humidity)}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
