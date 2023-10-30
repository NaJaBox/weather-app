import { createContext, useState } from "react";

export const WeatherContext = createContext(null);

export function WeatherContextProvider({ children }) {
  const [metric, setMetric] = useState(true);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleMetric = () => {
    setMetric(true);
  };

  const toggleImperial = () => {
    setMetric(false);
  };

  return (
    <WeatherContext.Provider
      value={{
        current,
        setCurrent,
        metric,
        toggleMetric,
        toggleImperial,
        loading,
        setLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
