import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div>
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
            <button id="currentLocation" className="btn btn-primary w-100">
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
