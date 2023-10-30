import "./Search.scss";
import React, { useContext, useState, useEffect } from "react";
import { WeatherContext } from "../WeatherContext/WeatherContext";

export const Search = () => {
  const [location, setLocation] = useState("");
  const { setCurrent, setLoading } = useContext(WeatherContext);
  const [error, setError] = useState(null);

  const apiKey = "fae7e17cffmshfe1bf38c1758f13p18b128jsnace168f82467";
  const apiHost = "weatherapi-com.p.rapidapi.com";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log("Geolocation is not supported"); // Debugging statement
    }
  });

  const fetchWeatherData = (latitude, longitude) => {
    setError(null);
    const url = `https://${apiHost}/forecast.json?q=${latitude}%2C${longitude}&days=3`;

    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((currentData) => {
        setCurrent(currentData);
        setLoading(false);
        // console.log(currentData);
      })
      .catch((error) => {
        setError("An error occurred while fetching weather data.");
        console.error(error);
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim() !== "") {
      setError(null); // Reset error state
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fae7e17cffmshfe1bf38c1758f13p18b128jsnace168f82467",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      fetch(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=7`,
        options
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((currentData) => {
          setCurrent(currentData);
          console.log(currentData);
          setLocation("");
        })
        .catch((error) => {
          setError("An error occurred. Please try again.");
          console.error(error);
        }); // You can use the user-entered location as the query
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">
          <svg viewBox="0 0 24 24" fill="white" height="2rem" width="2rem">
            <path d="M15.5 12c2.5 0 4.5 2 4.5 4.5 0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5m3.85-5.97C21.95 8.22 24 10.36 24 13c0 1.64-.79 3.1-2 4v-.5a6.5 6.5 0 00-6.5-6.5A6.5 6.5 0 009 16.5c0 .5.06 1 .17 1.5H6a6 6 0 01-6-6c0-3.1 2.34-5.64 5.35-5.97A7.506 7.506 0 0112 2a7.49 7.49 0 017.35 6.03z" />
          </svg>
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
