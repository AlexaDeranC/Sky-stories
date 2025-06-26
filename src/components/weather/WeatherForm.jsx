import React, { useState } from 'react'
import '../../styles/WeatherForm.css'
import WeatherCard from "./WeatherCard";
function WeatherForm({ onCitySearch }) {
  // This component allows users to search for a city's weather
  // It uses React state to manage the input field
  
  // State to track the input value
  const [cityInput, setCityInput] = useState('');
  // State to track if there's an error (like empty input)
  const [error, setError] = useState('');
  
  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    
    // Validate input
    if (!cityInput.trim()) {
      setError('Please enter a city name');
      return;
    }
    
    // Clear any previous error
    const funMessages = [
  "Oops! We need a city name to find your weather 🌍💨",
  "Try typing in a place like 'New York' or 'Paris'! 🗺️",
  "Hmm... that box looks empty! Can you fill it with a city? 📦",
  "No city? No problem... just give us one to search! 🏙️🔍"
];
setError(funMessages[Math.floor(Math.random() * funMessages.length)]);


    
    // Call the parent component's search function with the city name
    onCitySearch(cityInput);
    
    // Clear the input field after search
    setCityInput('');
  };
  
  return (
    <div className="weather-form-container">
      <form onSubmit={handleSubmit} className="weather-form">
        <div className="input-group">
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Enter a city 🌈"
            className={error ? 'error' : ''}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          Let’s Go!
          </button>
        </div>
        {/* Display error message if there is one */}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  )
}

export default WeatherForm