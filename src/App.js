import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Weather defaultCity="London" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
