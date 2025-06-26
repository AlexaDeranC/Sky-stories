import React from 'react'
import '../../styles/WeatherIcon.css'

function WeatherIcon({ condition, size = 'medium' }) {
  // This component displays an icon based on the weather condition
  // It also accepts a size prop to control the icon size
  
  // Map weather conditions to appropriate icon classes
  // We're using Font Awesome classes here for simplicity
  const getIconClass = () => {
    switch (condition) {
      case 'sunny':
        return 'fas fa-sun';
      case 'partly_cloudy':
        return 'fas fa-cloud-sun';
      case 'cloudy':
        return 'fas fa-cloud';
      case 'rainy':
        return 'fas fa-cloud-rain';
      case 'stormy':
        return 'fas fa-bolt';
      case 'snowy':
        return 'fas fa-snowflake';
      case 'windy':
        return 'fas fa-wind';
      default:
        return 'fas fa-cloud-sun'; // Default fallback
    }
  };
  
  // Map size prop to CSS class
  const sizeClass = `weather-icon-${size}`;
  
  return (
    <div className={`weather-icon ${sizeClass}`}>
      <i className={getIconClass()}></i>
    </div>
  )
}

export default WeatherIcon