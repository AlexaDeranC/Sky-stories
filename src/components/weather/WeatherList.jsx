import React from 'react'
import WeatherCard from '../../../WeatherCard'
import '../../styles/WeatherList.css'

function WeatherList({ cities }) {
  // This component renders a list of WeatherCard components
  // It accepts an array of city data objects as a prop
  
  // Handle the case when there are no cities to display
  if (!cities || cities.length === 0) {
    return (
      <div className="no-cities">
        <p>No cities to display. Try searching for a city above!</p>
      </div>
    );
  }
  
  return (
    <div className="weather-list">
      {/* Map each city to a WeatherCard component */}
      {cities.map(city => (
        <WeatherCard key={city.id} city={city} />
      ))}
    </div>
  )
}

export default WeatherList