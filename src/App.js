import React from 'react';
import './App.css';
import Weather from "./components/Weather/Weather";

function App() {
  const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de';

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather API_KEY={API_KEY} />
    </div>
  );
}

export default App;
