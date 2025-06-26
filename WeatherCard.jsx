import React from 'react';
import WeatherIcon from './WeatherIcon';
import '../../styles/WeatherCard.css';

function WeatherCard({ city }) {
  // Background color class based on numeric temp
  const getTemperatureClass = () => {
    const temp = parseFloat(city.temperature); // in °F
    if (temp >= 80) return 'hot';
    if (temp >= 70) return 'warm';
    if (temp >= 60) return 'mild';
    if (temp >= 45) return 'cool';
    return 'cold';
  };

  // Optional: still including the fun fact block
const getFunFact = (condition) => {
  const lower = condition.toLowerCase();

  if (lower.includes('sunny')) {
    return [
      "☀️ Sunshine gives your body Vitamin D!",
      "🕶️ Sunglasses protect your eyes from bright light!",
      "🌞 The Sun is actually a big star!"
    ];
  }

  if (lower.includes('cloud')) {
    return [
      "☁️ Clouds are made of tiny water drops!",
      "🌫️ Some clouds are so low they touch the ground (we call that fog)!",
      "🐑 Some clouds look like fluffy sheep!"
    ];
  }

  if (lower.includes('rain')) {
    return [
      "🌧️ Rain helps trees and flowers grow!",
      "🌈 Rain + sunshine = rainbows!",
      "☔ Frogs love rainy days!"
    ];
  }

  if (lower.includes('snow')) {
    return [
      "❄️ No two snowflakes are exactly the same!",
      "⛄ You need freezing temps for snow to fall!",
      "🧤 Snow feels soft, but it's just frozen water!"
    ];
  }

  if (lower.includes('wind')) {
    return [
      "💨 Wind is air moving fast!",
      "🎈 Kites love windy weather!",
      "🍃 Wind helps spread seeds and pollen!"
    ];
  }

  return [
    "🌈 Weather is amazing — it changes every day!",
    "🛰️ Satellites help us study the weather!",
    "🌎 Every place in the world has its own forecast!"
  ];
};


  return (
    <div className={`weather-card ${getTemperatureClass()}`}>
      <div className="weather-card-header">
        <h2>{city.name}</h2>
        <p className="country">📍{city.country}</p>
      </div>

      <div className="weather-card-body">
        <div className="temperature-display">
          <span className="temperature">{city.temperature}</span>
          <span className="feels-like">Feels like: {city.feels_like}</span>
        </div>

        <div className="condition-display">
          <img
            src={city.icon.startsWith('//') ? `https:${city.icon}` : city.icon}
            alt={city.description}
            className="weather-icon"
          />
          <p className="condition-text">{city.description}</p>
        </div>
      </div>

      <div className="weather-card-footer">
        <div className="weather-detail">
          <i className="fas fa-tint"></i>
          <span>{city.humidity}% Humidity</span>
        </div>
        <div className="weather-detail">
          <i className="fas fa-wind"></i>
          <span>{city.windSpeed} mph Wind</span>
        </div>
      </div>

     <div className="weather-fun-fact">
  {getFunFact(city.description || city.condition || '').map((fact, index) => (
    <p key={index}>{fact}</p>
  ))}
</div>
    </div>
  );
}

export default WeatherCard;
