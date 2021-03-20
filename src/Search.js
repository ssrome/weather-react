import React from "react";

export default function Search() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="row search">
      <div className="col">
        <form
          onSubmit={handleSubmit}
          className="row gy-2 gx-3 align-items-center"
          id="search-city"
        >
          <div className="col-auto">
            <div className="input-group">
              <div className="input-group-text">
                <i className="fas fa-search"></i>
              </div>
              <input
                type="search"
                className="form-control"
                placeholder="Enter city"
                aria-label="Search"
                id="city-input"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary"
              id="search-button"
              type="submit"
            >
              Search City
            </button>
          </div>
          <div className="col-auto">
            <button
              id="current-location"
              className="btn btn-secondary current-location"
              type="button"
            >
              Current Location
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
