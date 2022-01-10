import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import WeatherDetail from "./WeatherDetail";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="weather-app">
          <SearchForm />
          <WeatherDetail />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
