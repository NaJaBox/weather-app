import "./WeatherDetails.scss";
import { useContext } from "react";
import { WeatherContext } from "../WeatherContext/WeatherContext";
const WeatherDetails = () => {
  // const {  } = useContext(WeatherUnitsContext);

  const { current, metric } = useContext(WeatherContext);

  const feelsC =
    current && current.current ? Math.round(current.current.temp_c) : null;
  const feelsF =
    current && current.current ? Math.round(current.current.temp_f) : null;
  const windKm =
    current && current.current ? Math.round(current.current.gust_kph) : null;
  const windM =
    current && current.current ? Math.round(current.current.gust_mph) : null;
  const minTempC =
    current && current.forecast
      ? Math.round(current.forecast.forecastday[0].day.mintemp_c)
      : null;
  const maxTempC =
    current && current.current
      ? Math.round(current.forecast.forecastday[0].day.maxtemp_c)
      : null;
  const minTempF =
    current && current.current
      ? Math.round(current.forecast.forecastday[0].day.mintemp_f)
      : null;
  const maxTempF =
    current && current.current
      ? Math.round(current.forecast.forecastday[0].day.maxtemp_f)
      : null;
  const pressure_mb =
    current && current.current ? Math.round(current.current.pressure_mb) : null;
  const pressure_in =
    current && current.current ? Math.round(current.current.pressure_in) : null;

  if (!current) {
    return <div></div>;
  }

  return (
    <div className="WeatherDetailsCard">
      <div className="cardContainer1">
        <div className="col1">
          <div className="txtCol1">
            <span>Feels</span>
          </div>
          <span className="dividerShort">
            <hr />
          </span>
          <div className="dataCol1">
            {current && (
              <div>
                {metric ? <span>{feelsC}°C</span> : <span>{feelsF}°F</span>}
              </div>
            )}
          </div>
        </div>

        <div className="col2">
          <div className="txtCol2">
            <span>Wind</span>
          </div>
          <span className="dividerShort">
            <hr />
          </span>

          <div className="dataCol2">
            {current && (
              <div>
                {metric ? (
                  <span>
                    {windKm} <span className="unitKM">Km/H</span>
                  </span>
                ) : (
                  <span>
                    {windM} <span className="unitM">M/H</span>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="col3">
          <div className="txtCol3">
            <span>Pressure</span>
          </div>
          <span className="dividerShort">
            <hr />
          </span>

          <div className="dataCol3">
            {current && (
              <div>
                {metric ? (
                  <span>
                    {pressure_mb} <span className="unitKM">mb</span>
                  </span>
                ) : (
                  <span>
                    {pressure_in} <span className="unitM">in</span>
                  </span>
                )}
              </div>
            )}
            {/* {current.current.pressure_mb} */}
          </div>
        </div>

        <div className="col4">
          <div className="txtCol4">
            <span>Humidity</span>
          </div>
          <span className="dividerShort">
            <hr />
          </span>

          <div className="dataCol4">{current.current.humidity}%</div>
        </div>
      </div>
      <span className="divider">
        <hr />
      </span>
      <div className="cardContainer2">
        <div className="col5">
          <div className="txtCol5">
            <span>Min Temp</span>
          </div>
          <div className="dataCol5">
            {current && (
              <div>
                {metric ? (
                  <span>
                    {minTempC}
                    <span className="minC">°C</span>
                  </span>
                ) : (
                  <span>
                    {minTempF}
                    <span className="minF">°F</span>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="col6">
          <div className="txtCol6">
            <span>Max Temp</span>
          </div>
          <div className="dataCol6">
            {current && (
              <div>
                {metric ? (
                  <span>
                    {maxTempC}
                    <span className="minC">°C</span>
                  </span>
                ) : (
                  <span>
                    {maxTempF}
                    <span className="minF">°F</span>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="col7">
          <div className="txtCol7">
            <span>Rain today?</span>
          </div>
          <div className="dataCol7">
            <span>
              {current.forecast.forecastday[0].day.daily_chance_of_rain}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
