import { useState } from 'react';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import WeatherForm from './components/weather/WeatherForm';
import WeatherList from './components/weather/WeatherList';

function App() {
  const apiKey = "c4ef18a993da4526aef153023252105"; 

  const [cities, setCities] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState('');

  // Fetch weather for a single city
  const handleCitySearch = async (cityName) => {
    setHasSearched(true);
    setError('');

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
      );

      if (!res.ok) {
        throw new Error(`Oops! We couldn’t find"${cityName}". 😢`);
      }

      const data = await res.json();

    const cityData = {
      name: data.location.name,
      country: data.location.country,
      temperature: `${data.current.temp_f}°F`,
      feels_like: `${data.current.feelslike_f}°F`,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_mph,
      description: data.current.condition.text,
      icon: data.current.condition.icon,
    };


      setCities([cityData]);
    } catch (err) {
      setCities([]);
      setError(err.message);
    }
  };

  // Fetch weather for multiple default cities
  const handleViewAll = async () => {
    const defaultCities = ['New York', 'London', 'Tokyo', 'Paris', 'Toronto'];

    try {
      const fetches = defaultCities.map((city) =>
        fetch(
         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        ).then((res) => res.json())
      );

      const data = await Promise.all(fetches);

      const cityWeather = data.map((d) => ({
        name: d.name,
        temperature: `${Math.round(d.main.temp)}°F`,
        description: d.weather[0].description,
        icon: d.weather[0].icon,
      }));

      setCities(cityWeather);
      setError('');
      setHasSearched(false);
    } catch (err) {
      setError('Error loading city data.');
      setCities([]);
    }
  };

  return (
    <div className="app">
      <Header
        title="Sky Stories"
        subtitle="Unlock the Magic of the Sky"
      />

      <main className="main-content">
        <div className="container">
          <WeatherForm onCitySearch={handleCitySearch} />

          {error && (
            <div className="error-container">
              <p>{error}</p>
              <button onClick={handleViewAll} className="view-all-btn">
                View All Cities
              </button>
            </div>
          )}

          {hasSearched && !error && (
            <div className="view-all-container">
              <button onClick={handleViewAll} className="view-all-btn">
                View All Cities
              </button>
            </div>
          )}

          <WeatherList cities={cities} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
