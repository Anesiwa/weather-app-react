import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}ºF`);
  }
  let apiKey = "71955e43f0f1579de7523a19b31d90b6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
