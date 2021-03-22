import React from "react";
import WeatherApp from "./WeatherApp";
import Credit from "./Credit";
import Footer from "./Footer";
import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp />
        <Credit />
        <Footer />
      </div>
    </div>
  );
}
