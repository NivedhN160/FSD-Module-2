import React, { useState } from 'react';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const gifMap = {
    Rain: "https://media.tenor.com/QqojkuzNhQoAAAAM/rain-batman.gif",
    Drizzle: "https://media.tenor.com/QqojkuzNhQoAAAAM/rain-batman.gif",
    Clear: "https://media.tenor.com/C_lC_mtKHFIAAAAM/too-bright-sun.gif",
    Clouds: "https://media.tenor.com/IPMfUSOhNSYAAAAM/araraquara-sun.gif",
    Snow: "https://media.tenor.com/vG179dKJrfgAAAAM/jacknicholson-frozen.gif",
    Fog: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY_eenq0UAsJFGMPV3OSSHHrhDEf9vi_azQ&s",
    Haze: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY_eenq0UAsJFGMPV3OSSHHrhDEf9vi_azQ&s",
    Mist: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY_eenq0UAsJFGMPV3OSSHHrhDEf9vi_azQ&s",
    Smoke: "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyem5yOHZzMWlicnJ1aTZ1ZXZxZHUxcTAzeWc3aXJ5MHF2N2dwczZ1eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JrsSbPzICaRKU/giphy.gif",
    Default: "https://media.tenor.com/IPMfUSOhNSYAAAAM/araraquara-sun.gif"
  };

  const getWeather = () => {
    if (!city) return;
    // Note: Replace 'apikey' with your actual key if the one below stops working
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data));
  };

  // Determine Background logic
  const condition = weather && weather.weather ? weather.weather[0].main : 'Default';
  const backgroundUrl = gifMap[condition] || gifMap.Default;

  const containerStyle = {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    transition: 'background-image 0.5s ease'
  };

  const glassCard = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderRadius: '20px',
    padding: '30px',
    color: 'white',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%'
  };

  return (
    <div style={containerStyle}>
      <div style={glassCard}>
        <div style={{ marginBottom: '20px' }}>
          <input 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            placeholder="Enter city"
            style={{ padding: '10px', borderRadius: '5px 0 0 5px', border: 'none', outline: 'none' }}
          />
          <button 
            onClick={getWeather}
            style={{ padding: '10px', borderRadius: '0 5px 5px 0', border: 'none', cursor: 'pointer', background: '#007bff', color: 'white' }}
          >
            Show Report
          </button>
        </div>

        {weather && weather.cod === "404" && (
          <p style={{ color: "#ff4d4d", fontWeight: 'bold' }}>City not found</p>
        )}

        {weather && weather.weather && (
          <div>
            <h2 style={{ margin: '0 0 10px 0' }}>{weather.name}, {weather.sys.country}</h2>
            <h1 style={{ fontSize: '3.5rem', margin: '5px 0' }}>{Math.round(weather.main.temp)}°C</h1>
            <p style={{ textTransform: 'capitalize', fontSize: '1.1rem', marginBottom: '20px' }}>
              <strong>{weather.weather[0].description}</strong>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', textAlign: 'left', fontSize: '0.9rem', background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px' }}>
              <div><strong>Feels Like:</strong> {weather.main.feels_like}°C</div>
              <div><strong>Humidity:</strong> {weather.main.humidity}%</div>
              <div><strong>Pressure:</strong> {weather.main.pressure} hPa</div>
              <div><strong>Wind:</strong> {weather.wind.speed} m/s</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}