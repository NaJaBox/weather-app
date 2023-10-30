import "./WeatherMain.scss";
import { useContext } from "react";
import { WeatherContext } from "../WeatherContext/WeatherContext";

function WeatherMain() {
  const { current, metric, toggleMetric, toggleImperial } =
    useContext(WeatherContext);
  // console.log(current);

  const tempC =
    current && current.current ? Math.round(current.current.temp_c) : null;
  const tempF =
    current && current.current ? Math.round(current.current.temp_f) : null;

  if (!current) {
    return;
  }

  return (
    <>
      <div className="firstCard">
        <div className="location">
          <div className="city">{current.location.name}</div>
          <div className="country">{current.location.country}</div>
          <div className="localTime">{current.location.localtime}</div>
        </div>

        <div className="shortWeather">
          <div className="tempNow">
            {current && (
              <div className="localTemp">
                {metric ? <span>{tempC}</span> : <span>{tempF}</span>}
              </div>
            )}
            <div className="unitBtn">
              <button
                className={`tempC ${metric ? "active" : ""}`}
                onClick={toggleMetric}
              >
                °C
              </button>
              <span className="divider">|</span>
              <button className="tempF" onClick={toggleImperial}>
                °F
              </button>
            </div>
          </div>
          <div className="icon">
            <img src={current.current.condition.icon} alt="weather icon" />
          </div>
          <div className="condition">{current.current.condition.text}</div>
        </div>
      </div>
    </>
  );
}

export default WeatherMain;
